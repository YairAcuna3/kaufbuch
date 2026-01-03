import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const doubts = await prisma.doubt.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(doubts);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { toWho, doubt, amount, wasPay } = await req.json();

  const newDoubt = await prisma.doubt.create({
    data: {
      toWho,
      doubt,
      amount,
      wasPay: wasPay || false,
      userId: session.user.id,
    },
  });

  return NextResponse.json(newDoubt);
}
