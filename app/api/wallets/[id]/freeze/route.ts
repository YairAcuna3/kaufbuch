import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/app/lib/auth";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { targetWalletId } = await request.json();

    const wallet = await prisma.wallet.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "Wallet no encontrada" },
        { status: 404 }
      );
    }

    if (wallet.isDefault) {
      return NextResponse.json(
        { error: "No se puede congelar la wallet principal" },
        { status: 400 }
      );
    }

    if (wallet.isFrozen) {
      return NextResponse.json(
        { error: "La wallet ya está congelada" },
        { status: 400 }
      );
    }

    // Calcular balance actual
    const [recordsSum, adjustmentsSum, doubts] = await Promise.all([
      prisma.record.aggregate({
        where: { walletId: id, isGift: false },
        _sum: { price: true },
      }),
      prisma.balanceAdjustment.aggregate({
        where: { walletId: id },
        _sum: { amount: true },
      }),
      prisma.doubt.findMany({
        where: { walletId: id },
      }),
    ]);

    let doubtsBalance = 0;
    for (const doubt of doubts) {
      if (doubt.wasPay) {
        doubtsBalance += doubt.doubt ? -doubt.amount : doubt.amount;
      }
    }

    const balance =
      (recordsSum._sum.price || 0) +
      (adjustmentsSum._sum.amount || 0) +
      doubtsBalance;

    // Si tiene balance != 0, necesita transferir a otra wallet
    if (balance !== 0) {
      if (!targetWalletId) {
        return NextResponse.json(
          {
            error:
              "La wallet tiene saldo. Debes especificar una wallet destino para transferir el balance.",
            balance,
          },
          { status: 400 }
        );
      }

      const targetWallet = await prisma.wallet.findFirst({
        where: {
          id: targetWalletId,
          userId: session.user.id,
          isFrozen: false,
        },
      });

      if (!targetWallet) {
        return NextResponse.json(
          { error: "Wallet destino no encontrada" },
          { status: 404 }
        );
      }

      if (targetWalletId === id) {
        return NextResponse.json(
          { error: "No puedes transferir a la misma wallet" },
          { status: 400 }
        );
      }

      // Crear ajustes de balance para la transferencia
      await prisma.$transaction([
        // Restar de la wallet origen
        prisma.balanceAdjustment.create({
          data: {
            amount: -balance,
            reason: `Transferido a ${targetWallet.name} (congelación)`,
            walletId: id,
          },
        }),
        // Sumar a la wallet destino
        prisma.balanceAdjustment.create({
          data: {
            amount: balance,
            reason: `Transferido desde ${wallet.name} (congelación)`,
            walletId: targetWalletId,
          },
        }),
      ]);
    }

    // Congelar la wallet y quitar el parentId
    const updated = await prisma.wallet.update({
      where: { id },
      data: {
        isFrozen: true,
        parentId: null,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error freezing wallet:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
