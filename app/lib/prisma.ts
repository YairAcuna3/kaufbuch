import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client";
import { neonConfig } from "@neondatabase/serverless";

// Configurar WebSocket para desarrollo local
// En Vercel/producción, usa el WebSocket nativo del runtime
if (typeof window === "undefined" && process.env.NODE_ENV !== "production") {
  try {
    const ws = require("ws");
    neonConfig.webSocketConstructor = ws;
  } catch (e) {
    // ws no disponible, usar WebSocket nativo
  }
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  (() => {
    const connectionString = process.env.DATABASE_URL!;
    const adapter = new PrismaNeon({ connectionString });
    return new PrismaClient({ adapter });
  })();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
