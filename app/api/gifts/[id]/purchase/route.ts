import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const { walletId, price, buyDate, notes, isIncome, isGift } =
    await req.json();

  // Verificar que el gift existe y pertenece al usuario
  const gift = await prisma.gift.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!gift) {
    return NextResponse.json(
      { error: "Regalo no encontrado" },
      { status: 404 }
    );
  }

  // Verificar wallet
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

  // Usar precio del gift si no se proporciona uno nuevo
  const finalPrice = price !== undefined ? price : gift.price;
  const finalNotes = notes !== undefined ? notes : gift.notes;
  const finalIsIncome = isIncome !== undefined ? isIncome : false;
  const finalIsGift = isGift !== undefined ? isGift : false;

  // Construir nombre con destinatario si existe
  const recordName = gift.toWho
    ? `${gift.name} (para ${gift.toWho})`
    : gift.name;

  // Calcular el precio con signo correcto
  let recordPrice = null;
  if (finalPrice !== null) {
    recordPrice = finalIsIncome ? Math.abs(finalPrice) : -Math.abs(finalPrice);
  }

  // Crear el record y eliminar el gift en una transacción
  const [record] = await prisma.$transaction([
    prisma.record.create({
      data: {
        name: recordName,
        price: recordPrice,
        notes: finalNotes,
        buyDate: buyDate ? new Date(buyDate) : new Date(),
        isIncome: finalIsIncome,
        isGift: finalIsGift,
        walletId: targetWalletId,
      },
      include: { tags: true, wallet: { select: { id: true, name: true } } },
    }),
    prisma.gift.delete({ where: { id } }),
  ]);

  return NextResponse.json(record);
}
