import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const { name, price, notes, buyDate, isIncome, isGift, tagIds, walletId } =
    await req.json();

  // Verificar que el record pertenece al usuario
  const existingRecord = await prisma.record.findFirst({
    where: { id },
    include: { wallet: true },
  });

  if (!existingRecord || existingRecord.wallet.userId !== session.user.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  // Si se cambia de wallet, verificar que la nueva wallet pertenece al usuario
  let targetWalletId = existingRecord.walletId;
  if (walletId && walletId !== existingRecord.walletId) {
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

  const record = await prisma.record.update({
    where: { id },
    data: {
      name,
      price: isIncome ? Math.abs(price || 0) : -Math.abs(price || 0),
      notes,
      buyDate: buyDate ? new Date(buyDate) : null,
      isIncome,
      isGift: isGift || false,
      walletId: targetWalletId,
      tags: { set: tagIds?.map((tid: string) => ({ id: tid })) || [] },
    },
    include: { tags: true, wallet: { select: { id: true, name: true } } },
  });

  return NextResponse.json(record);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;

  // Verificar que el record pertenece al usuario
  const existingRecord = await prisma.record.findFirst({
    where: { id },
    include: { wallet: true },
  });

  if (!existingRecord || existingRecord.wallet.userId !== session.user.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  await prisma.record.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
