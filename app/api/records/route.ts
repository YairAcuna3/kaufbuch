import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const sortOrder = searchParams.get("sortOrder") || "desc";
  const tagIds = searchParams.get("tags")?.split(",").filter(Boolean) || [];
  const isIncomeParam = searchParams.get("isIncome");
  const walletId = searchParams.get("walletId");
  const page = parseInt(searchParams.get("page") || "1");
  const pageSizeParam = parseInt(searchParams.get("pageSize") || "10");
  const pageSize = [10, 20, 30, 50, 100].includes(pageSizeParam)
    ? pageSizeParam
    : 10;

  // Obtener wallets del usuario para filtrar
  const userWallets = await prisma.wallet.findMany({
    where: { userId: session.user.id },
    select: { id: true },
  });
  const userWalletIds = userWallets.map((w) => w.id);

  const where: Record<string, unknown> = {
    walletId: walletId ? walletId : { in: userWalletIds },
  };

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { notes: { contains: search, mode: "insensitive" } },
    ];
  }

  if (tagIds.length > 0) {
    where.tags = { some: { id: { in: tagIds } } };
  }

  if (isIncomeParam !== null) {
    where.isIncome = isIncomeParam === "true";
  }

  const orderBy = (() => {
    if (sortBy === "buyDate") {
      return [{ buyDate: { sort: sortOrder, nulls: "last" } }] as any;
    } else if (sortBy === "name") {
      return { name: sortOrder };
    } else if (sortBy === "price") {
      return { price: sortOrder };
    } else {
      return { createdAt: sortOrder };
    }
  })();

  // Calcular balance general (todas las wallets activas del usuario)
  const activeWallets = await prisma.wallet.findMany({
    where: { userId: session.user.id, isFrozen: false },
    select: { id: true },
  });
  const activeWalletIds = activeWallets.map((w) => w.id);

  const [
    records,
    total,
    balanceResult,
    overallBalanceResult,
    adjustmentsResult,
    walletBalanceResult,
    walletAdjustmentsResult,
  ] = await Promise.all([
    prisma.record.findMany({
      where,
      include: { tags: true, wallet: { select: { id: true, name: true } } },
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.record.count({ where }),
    prisma.record.aggregate({
      where: { ...where, isGift: false },
      _sum: { price: true },
    }),
    prisma.record.aggregate({
      where: { walletId: { in: activeWalletIds }, isGift: false },
      _sum: { price: true },
    }),
    prisma.balanceAdjustment.aggregate({
      where: { walletId: { in: activeWalletIds } },
      _sum: { amount: true },
    }),
    // Balance de la wallet seleccionada
    walletId
      ? prisma.record.aggregate({
          where: { walletId, isGift: false },
          _sum: { price: true },
        })
      : Promise.resolve({ _sum: { price: null } }),
    walletId
      ? prisma.balanceAdjustment.aggregate({
          where: { walletId },
          _sum: { amount: true },
        })
      : Promise.resolve({ _sum: { amount: null } }),
  ]);

  const adjustmentsTotal = adjustmentsResult._sum.amount || 0;
  const walletAdjustmentsTotal = walletAdjustmentsResult._sum.amount || 0;

  return NextResponse.json({
    records,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
    totalBalance: balanceResult._sum.price || 0,
    overallBalance: (overallBalanceResult._sum.price || 0) + adjustmentsTotal,
    walletBalance: walletId
      ? (walletBalanceResult._sum.price || 0) + walletAdjustmentsTotal
      : null,
  });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { name, price, notes, buyDate, isIncome, isGift, tagIds, walletId } =
    await req.json();

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

  const record = await prisma.record.create({
    data: {
      name,
      price: isIncome ? Math.abs(price || 0) : -Math.abs(price || 0),
      notes,
      buyDate: buyDate ? new Date(buyDate) : null,
      isIncome,
      isGift: isGift || false,
      walletId: targetWalletId,
      tags: tagIds?.length
        ? { connect: tagIds.map((id: string) => ({ id })) }
        : undefined,
    },
    include: { tags: true, wallet: { select: { id: true, name: true } } },
  });

  return NextResponse.json(record);
}
