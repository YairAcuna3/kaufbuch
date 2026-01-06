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
    const walletId = searchParams.get("walletId");

    // Obtener wallets del usuario
    const userWallets = await prisma.wallet.findMany({
      where: { userId: session.user.id },
      select: { id: true },
    });
    const userWalletIds = userWallets.map((w) => w.id);

    const adjustments = await prisma.balanceAdjustment.findMany({
      where: {
        walletId: walletId ? walletId : { in: userWalletIds },
      },
      include: {
        wallet: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(adjustments);
  } catch (error) {
    console.error("Error fetching balance adjustments:", error);
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

    const { amount, reason, walletId } = await request.json();

    if (typeof amount !== "number") {
      return NextResponse.json(
        { error: "Amount is required and must be a number" },
        { status: 400 }
      );
    }

    // Si no se especifica wallet, usar la default
    let targetWalletId = walletId;
    if (!targetWalletId) {
      const defaultWallet = await prisma.wallet.findFirst({
        where: { userId: session.user.id, isDefault: true },
      });
      if (!defaultWallet) {
        return NextResponse.json(
          { error: "No se encontró wallet por defecto" },
          { status: 400 }
        );
      }
      targetWalletId = defaultWallet.id;
    } else {
      // Verificar que la wallet pertenece al usuario y no está congelada
      const wallet = await prisma.wallet.findFirst({
        where: { id: walletId, userId: session.user.id, isFrozen: false },
      });
      if (!wallet) {
        return NextResponse.json(
          { error: "Wallet no encontrada o congelada" },
          { status: 404 }
        );
      }
    }

    const adjustment = await prisma.balanceAdjustment.create({
      data: {
        amount,
        reason: reason || null,
        walletId: targetWalletId,
      },
      include: {
        wallet: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(adjustment);
  } catch (error) {
    console.error("Error creating balance adjustment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
