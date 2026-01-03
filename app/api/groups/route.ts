import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { name, type } = await req.json();

  const maxOrder = await prisma.group.aggregate({
    where: { userId: session.user.id, type },
    _max: { order: true },
  });

  const group = await prisma.group.create({
    data: {
      name,
      type,
      order: (maxOrder._max.order || 0) + 1,
      userId: session.user.id,
    },
  });

  return NextResponse.json(group);
}
