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
  const page = parseInt(searchParams.get("page") || "1");
  const pageSizeParam = parseInt(searchParams.get("pageSize") || "10");
  const pageSize = [10, 20, 30, 50, 100].includes(pageSizeParam)
    ? pageSizeParam
    : 10;

  const where: Record<string, unknown> = {
    userId: session.user.id,
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

  // Filtrar por tipo de registro (ingreso o gasto)
  if (isIncomeParam !== null) {
    where.isIncome = isIncomeParam === "true";
  }

  const orderBy = (() => {
    if (sortBy === "buyDate") {
      // Para buyDate, usamos ordenamiento especial: nulls al final
      // Prisma no soporta nulls last directamente, así que ordenamos por:
      // 1. Si tiene fecha o no (los que tienen fecha primero)
      // 2. Luego por la fecha en sí
      return [{ buyDate: { sort: sortOrder, nulls: "last" } }] as any;
    } else if (sortBy === "name") {
      return { name: sortOrder };
    } else if (sortBy === "price") {
      return { price: sortOrder };
    } else {
      return { createdAt: sortOrder };
    }
  })();

  const [
    records,
    total,
    balanceResult,
    overallBalanceResult,
    adjustmentsResult,
  ] = await Promise.all([
    prisma.record.findMany({
      where,
      include: { tags: true },
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.record.count({ where }),
    prisma.record.aggregate({
      where: { ...where, isGift: false },
      _sum: { price: true },
    }),
    // Calcular saldo total general (todos los registros del usuario, excluyendo regalos)
    prisma.record.aggregate({
      where: { userId: session.user.id, isGift: false },
      _sum: { price: true },
    }),
    // Sumar todos los ajustes de balance del usuario
    prisma.balanceAdjustment.aggregate({
      where: { userId: session.user.id },
      _sum: { amount: true },
    }),
  ]);

  const adjustmentsTotal = adjustmentsResult._sum.amount || 0;

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
  });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { name, price, notes, buyDate, isIncome, isGift, tagIds } =
    await req.json();

  const record = await prisma.record.create({
    data: {
      name,
      price: isIncome ? Math.abs(price || 0) : -Math.abs(price || 0),
      notes,
      buyDate: buyDate ? new Date(buyDate) : null,
      isIncome,
      isGift: isGift || false,
      userId: session.user.id,
      tags: tagIds?.length
        ? { connect: tagIds.map((id: string) => ({ id })) }
        : undefined,
    },
    include: { tags: true },
  });

  return NextResponse.json(record);
}
