import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/app/lib/auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { amount, reason, walletId } = await request.json();

    if (typeof amount !== "number") {
      return NextResponse.json(
        { error: "Amount is required and must be a number" },
        { status: 400 }
      );
    }

    // Verificar que el ajuste pertenece al usuario
    const existingAdjustment = await prisma.balanceAdjustment.findFirst({
      where: { id },
      include: { wallet: true },
    });

    if (
      !existingAdjustment ||
      existingAdjustment.wallet.userId !== session.user.id
    ) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Si se cambia de wallet, verificar que la nueva wallet pertenece al usuario
    let targetWalletId = existingAdjustment.walletId;
    if (walletId && walletId !== existingAdjustment.walletId) {
      const wallet = await prisma.wallet.findFirst({
        where: { id: walletId, userId: session.user.id, isFrozen: false },
      });
      if (!wallet) {
        return NextResponse.json(
          { error: "Wallet no encontrada o congelada" },
          { status: 404 }
        );
      }
      targetWalletId = walletId;
    }

    const adjustment = await prisma.balanceAdjustment.update({
      where: { id },
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
    console.error("Error updating balance adjustment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Verificar que el ajuste pertenece al usuario
    const existingAdjustment = await prisma.balanceAdjustment.findFirst({
      where: { id },
      include: { wallet: true },
    });

    if (
      !existingAdjustment ||
      existingAdjustment.wallet.userId !== session.user.id
    ) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    await prisma.balanceAdjustment.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting balance adjustment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
