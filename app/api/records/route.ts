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
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = 30;

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

  const orderBy: Record<string, string> = {};
  if (sortBy === "buyDate") {
    orderBy.buyDate = sortOrder;
  } else if (sortBy === "name") {
    orderBy.name = sortOrder;
  } else if (sortBy === "price") {
    orderBy.price = sortOrder;
  } else {
    orderBy.createdAt = sortOrder;
  }

  const [records, total, balanceResult] = await Promise.all([
    prisma.record.findMany({
      where,
      include: { tags: true },
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.record.count({ where }),
    prisma.record.aggregate({
      where,
      _sum: { price: true },
    }),
  ]);

  return NextResponse.json({
    records,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
    totalBalance: balanceResult._sum.price || 0,
  });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { name, price, notes, buyDate, isIncome, tagIds } = await req.json();

  const record = await prisma.record.create({
    data: {
      name,
      price: isIncome ? Math.abs(price || 0) : -Math.abs(price || 0),
      notes,
      buyDate: buyDate ? new Date(buyDate) : null,
      isIncome,
      userId: session.user.id,
      tags: tagIds?.length
        ? { connect: tagIds.map((id: string) => ({ id })) }
        : undefined,
    },
    include: { tags: true },
  });

  return NextResponse.json(record);
}
