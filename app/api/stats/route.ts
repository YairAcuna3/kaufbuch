import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const year = parseInt(
    searchParams.get("year") || new Date().getFullYear().toString()
  );
  const month = parseInt(
    searchParams.get("month") || (new Date().getMonth() + 1).toString()
  );

  // Obtener wallets del usuario
  const userWallets = await prisma.wallet.findMany({
    where: { userId: session.user.id },
    select: { id: true },
  });
  const userWalletIds = userWallets.map((w) => w.id);

  // Calcular inicio y fin del mes
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59, 999);

  // Obtener todos los records del mes
  const records = await prisma.record.findMany({
    where: {
      walletId: { in: userWalletIds },
      buyDate: {
        gte: startDate,
        lte: endDate,
      },
      isGift: false,
    },
    select: {
      buyDate: true,
      price: true,
      isIncome: true,
    },
    orderBy: { buyDate: "asc" },
  });

  // Agrupar por día
  const daysInMonth = new Date(year, month, 0).getDate();
  const dailyData: { day: number; income: number; expense: number }[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    dailyData.push({ day, income: 0, expense: 0 });
  }

  records.forEach((record) => {
    if (record.buyDate && record.price !== null) {
      const day = new Date(record.buyDate).getDate();
      if (record.isIncome) {
        dailyData[day - 1].income += record.price;
      } else {
        dailyData[day - 1].expense += Math.abs(record.price);
      }
    }
  });

  // Obtener meses disponibles (con registros)
  const availableMonths = await prisma.record.findMany({
    where: {
      walletId: { in: userWalletIds },
      buyDate: { not: null },
    },
    select: { buyDate: true },
    distinct: ["buyDate"],
  });

  const monthsSet = new Set<string>();
  availableMonths.forEach((r) => {
    if (r.buyDate) {
      const d = new Date(r.buyDate);
      monthsSet.add(
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
      );
    }
  });

  const months = Array.from(monthsSet).sort().reverse();

  // Totales del mes
  const totalIncome = dailyData.reduce((sum, d) => sum + d.income, 0);
  const totalExpense = dailyData.reduce((sum, d) => sum + d.expense, 0);

  return NextResponse.json({
    dailyData,
    availableMonths: months,
    totals: {
      income: totalIncome,
      expense: totalExpense,
      balance: totalIncome - totalExpense,
    },
  });
}
