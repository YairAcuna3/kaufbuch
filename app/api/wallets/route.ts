import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/app/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const includeFrozen = searchParams.get("includeFrozen") === "true";

    const wallets = await prisma.wallet.findMany({
      where: {
        userId: session.user.id,
        isFrozen: includeFrozen ? undefined : false,
      },
      include: {
        children: {
          where: includeFrozen ? undefined : { isFrozen: false },
        },
        _count: {
          select: {
            records: true,
            doubts: true,
            balanceAdjustments: true,
          },
        },
      },
      orderBy: [{ isDefault: "desc" }, { name: "asc" }],
    });

    // Calcular balance para cada wallet
    const walletsWithBalance = await Promise.all(
      wallets.map(async (wallet) => {
        const [recordsSum, adjustmentsSum, doubtsSum] = await Promise.all([
          prisma.record.aggregate({
            where: { walletId: wallet.id, isGift: false },
            _sum: { price: true },
          }),
          prisma.balanceAdjustment.aggregate({
            where: { walletId: wallet.id },
            _sum: { amount: true },
          }),
          // Calcular impacto de deudas: me deben (+) y debo (-) cuando están pagadas
          prisma.doubt.findMany({
            where: { walletId: wallet.id },
          }),
        ]);

        // Calcular balance de deudas
        let doubtsBalance = 0;
        for (const doubt of doubtsSum) {
          if (doubt.wasPay) {
            // Si está pagada: si me debían, ya recibí el dinero (+), si debía, ya lo pagué (-)
            doubtsBalance += doubt.doubt ? -doubt.amount : doubt.amount;
          }
        }

        const balance =
          (recordsSum._sum.price || 0) +
          (adjustmentsSum._sum.amount || 0) +
          doubtsBalance;

        return {
          ...wallet,
          balance,
        };
      })
    );

    return NextResponse.json(walletsWithBalance);
  } catch (error) {
    console.error("Error fetching wallets:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, parentId } = await request.json();

    if (!name?.trim()) {
      return NextResponse.json(
        { error: "El nombre es requerido" },
        { status: 400 }
      );
    }

    // Verificar que el parent existe y pertenece al usuario
    if (parentId) {
      const parent = await prisma.wallet.findFirst({
        where: { id: parentId, userId: session.user.id, isFrozen: false },
      });
      if (!parent) {
        return NextResponse.json(
          { error: "Wallet padre no encontrada" },
          { status: 404 }
        );
      }
    }

    const wallet = await prisma.wallet.create({
      data: {
        name: name.trim(),
        userId: session.user.id,
        parentId: parentId || null,
      },
    });

    return NextResponse.json(wallet);
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Ya existe una wallet con ese nombre" },
        { status: 400 }
      );
    }
    console.error("Error creating wallet:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
