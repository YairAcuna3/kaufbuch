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
  const { toWho, doubt, amount, wasPay } = await req.json();

  const updatedDoubt = await prisma.doubt.update({
    where: { id, userId: session.user.id },
    data: { toWho, doubt, amount, wasPay },
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

  await prisma.doubt.delete({
    where: { id, userId: session.user.id },
  });

  return NextResponse.json({ success: true });
}
