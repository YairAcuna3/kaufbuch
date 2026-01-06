import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/app/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { fromWalletId, toWalletId, amount } = await request.json();

    if (!fromWalletId || !toWalletId) {
      return NextResponse.json(
        { error: "Se requieren las wallets origen y destino" },
        { status: 400 }
      );
    }

    if (typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { error: "El monto debe ser un número positivo" },
        { status: 400 }
      );
    }

    if (fromWalletId === toWalletId) {
      return NextResponse.json(
        { error: "No puedes transferir a la misma wallet" },
        { status: 400 }
      );
    }

    const [fromWallet, toWallet] = await Promise.all([
      prisma.wallet.findFirst({
        where: { id: fromWalletId, userId: session.user.id, isFrozen: false },
      }),
      prisma.wallet.findFirst({
        where: { id: toWalletId, userId: session.user.id, isFrozen: false },
      }),
    ]);

    if (!fromWallet) {
      return NextResponse.json(
        { error: "Wallet origen no encontrada o congelada" },
        { status: 404 }
      );
    }

    if (!toWallet) {
      return NextResponse.json(
        { error: "Wallet destino no encontrada o congelada" },
        { status: 404 }
      );
    }

    // Crear los ajustes de balance
    const [fromAdjustment, toAdjustment] = await prisma.$transaction([
      prisma.balanceAdjustment.create({
        data: {
          amount: -amount,
          reason: `Transferido a ${toWallet.name}`,
          walletId: fromWalletId,
        },
      }),
      prisma.balanceAdjustment.create({
        data: {
          amount: amount,
          reason: `Transferido desde ${fromWallet.name}`,
          walletId: toWalletId,
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      fromAdjustment,
      toAdjustment,
    });
  } catch (error) {
    console.error("Error transferring between wallets:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
