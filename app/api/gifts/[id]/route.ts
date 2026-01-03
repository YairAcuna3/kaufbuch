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
  const { name, price, toWho, notes, groupId } = await req.json();

  const gift = await prisma.gift.update({
    where: { id, userId: session.user.id },
    data: { name, price, toWho, notes, groupId },
    include: { group: true },
  });

  return NextResponse.json(gift);
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

  await prisma.gift.delete({
    where: { id, userId: session.user.id },
  });

  return NextResponse.json({ success: true });
}
