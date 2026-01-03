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
  const { name, price, notes, buyDate, isIncome, tagIds } = await req.json();

  const record = await prisma.record.update({
    where: { id, userId: session.user.id },
    data: {
      name,
      price: isIncome ? Math.abs(price || 0) : -Math.abs(price || 0),
      notes,
      buyDate: buyDate ? new Date(buyDate) : null,
      isIncome,
      tags: { set: tagIds?.map((tid: string) => ({ id: tid })) || [] },
    },
    include: { tags: true },
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

  await prisma.record.delete({
    where: { id, userId: session.user.id },
  });

  return NextResponse.json({ success: true });
}
