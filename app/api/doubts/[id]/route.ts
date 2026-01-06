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
  const { toWho, doubt, amount, wasPay, walletId } = await req.json();

  // Verificar que la deuda pertenece al usuario
  const existingDoubt = await prisma.doubt.findFirst({
    where: { id },
    include: { wallet: true },
  });

  if (!existingDoubt || existingDoubt.wallet.userId !== session.user.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  // Si se cambia de wallet, verificar que la nueva wallet pertenece al usuario
  let targetWalletId = existingDoubt.walletId;
  if (walletId && walletId !== existingDoubt.walletId) {
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

  const updatedDoubt = await prisma.doubt.update({
    where: { id },
    data: {
      toWho,
      doubt,
      amount,
      wasPay,
      walletId: targetWalletId,
    },
    include: {
      wallet: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json(updatedDoubt);
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

  // Verificar que la deuda pertenece al usuario
  const existingDoubt = await prisma.doubt.findFirst({
    where: { id },
    include: { wallet: true },
  });

  if (!existingDoubt || existingDoubt.wallet.userId !== session.user.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  await prisma.doubt.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
