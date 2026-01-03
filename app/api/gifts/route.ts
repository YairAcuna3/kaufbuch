import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const gifts = await prisma.gift.findMany({
    where: { userId: session.user.id },
    include: { group: true },
    orderBy: { order: "asc" },
  });

  const groups = await prisma.group.findMany({
    where: { userId: session.user.id, type: "gift" },
    orderBy: { order: "asc" },
  });

  return NextResponse.json({ gifts, groups });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { name, price, toWho, notes, groupId } = await req.json();

  const maxOrder = await prisma.gift.aggregate({
    where: { userId: session.user.id, groupId: groupId || null },
    _max: { order: true },
  });

  const gift = await prisma.gift.create({
    data: {
      name,
      price,
      toWho,
      notes,
      order: (maxOrder._max.order || 0) + 1,
      userId: session.user.id,
      groupId,
    },
    include: { group: true },
  });

  return NextResponse.json(gift);
}
