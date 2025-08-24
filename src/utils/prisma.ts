import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  });

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = prisma;
}

export default prisma;
