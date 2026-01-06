import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const walletId = searchParams.get("walletId");

  // Obtener wallets del usuario
  const userWallets = await prisma.wallet.findMany({
    where: { userId: session.user.id },
    select: { id: true },
  });
  const userWalletIds = userWallets.map((w) => w.id);

  const doubts = await prisma.doubt.findMany({
    where: {
      walletId: walletId ? walletId : { in: userWalletIds },
    },
    include: {
      wallet: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(doubts);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { toWho, doubt, amount, wasPay, walletId } = await req.json();

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

  const newDoubt = await prisma.doubt.create({
    data: {
      toWho,
      doubt,
      amount,
      wasPay: wasPay || false,
      walletId: targetWalletId,
    },
    include: {
      wallet: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json(newDoubt);
}
