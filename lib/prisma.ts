import { PrismaClient } from "@/generated/prisma";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Ensure the global object is extended to store the Prisma client
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Use the existing Prisma client if it exists, or create a new one
export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  // Store the Prisma client in globalThis to reuse in development
  globalThis.prismaGlobal = prisma;
}
