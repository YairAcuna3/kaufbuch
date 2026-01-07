import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/app/lib/auth";

export async function GET(
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
      include: {
        children: true,
        parent: true,
      },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "Wallet no encontrada" },
        { status: 404 }
      );
    }

    // Calcular balance
    const [recordsSum, adjustmentsSum, doubts] = await Promise.all([
      prisma.record.aggregate({
        where: { walletId: wallet.id, isGift: false },
        _sum: { price: true },
      }),
      prisma.balanceAdjustment.aggregate({
        where: { walletId: wallet.id },
        _sum: { amount: true },
      }),
      prisma.doubt.findMany({
        where: { walletId: wallet.id },
      }),
    ]);

    let doubtsBalance = 0;
    for (const doubt of doubts) {
      if (doubt.wasPay) {
        doubtsBalance += doubt.doubt ? -doubt.amount : doubt.amount;
      }
    }

    const balance =
      (recordsSum._sum.price || 0) +
      (adjustmentsSum._sum.amount || 0) +
      doubtsBalance;

    return NextResponse.json({ ...wallet, balance });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { name, description, parentId } = await request.json();

    const wallet = await prisma.wallet.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "Wallet no encontrada" },
        { status: 404 }
      );
    }

    // Verificar que el parent existe y pertenece al usuario
    if (parentId) {
      // No puede ser su propio padre
      if (parentId === id) {
        return NextResponse.json(
          { error: "Una wallet no puede ser su propio padre" },
          { status: 400 }
        );
      }

      const parent = await prisma.wallet.findFirst({
        where: { id: parentId, userId: session.user.id, isFrozen: false },
      });
      if (!parent) {
        return NextResponse.json(
          { error: "Wallet padre no encontrada" },
          { status: 404 }
        );
      }
    }

    const updated = await prisma.wallet.update({
      where: { id },
      data: {
        name: name?.trim() || wallet.name,
        description:
          description !== undefined
            ? description?.trim() || null
            : wallet.description,
        parentId: parentId === null ? null : parentId || wallet.parentId,
      },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Ya existe una wallet con ese nombre" },
        { status: 400 }
      );
    }
    console.error("Error updating wallet:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
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

    if (wallet.isDefault) {
      return NextResponse.json(
        { error: "No se puede eliminar la wallet principal" },
        { status: 400 }
      );
    }

    // Verificar que no tenga registros, deudas o ajustes
    const [recordsCount, doubtsCount, adjustmentsCount] = await Promise.all([
      prisma.record.count({ where: { walletId: id } }),
      prisma.doubt.count({ where: { walletId: id } }),
      prisma.balanceAdjustment.count({ where: { walletId: id } }),
    ]);

    if (recordsCount > 0 || doubtsCount > 0 || adjustmentsCount > 0) {
      return NextResponse.json(
        {
          error:
            "No se puede eliminar una wallet con registros, deudas o ajustes. Muévelos primero.",
        },
        { status: 400 }
      );
    }

    await prisma.wallet.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting wallet:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
