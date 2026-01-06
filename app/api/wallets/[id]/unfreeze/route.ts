import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/app/lib/auth";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const wallet = await prisma.wallet.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "Wallet no encontrada" },
        { status: 404 }
      );
    }

    if (!wallet.isFrozen) {
      return NextResponse.json(
        { error: "La wallet no está congelada" },
        { status: 400 }
      );
    }

    const updated = await prisma.wallet.update({
      where: { id },
      data: { isFrozen: false },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error unfreezing wallet:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
