import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { items } = await req.json();

  await prisma.$transaction(
    items.map((item: { id: string; order: number; groupId: string | null }) =>
      prisma.wish.update({
        where: { id: item.id, userId: session.user.id },
        data: { order: item.order, groupId: item.groupId },
      })
    )
  );

  return NextResponse.json({ success: true });
}
