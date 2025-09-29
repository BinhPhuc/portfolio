import { PrismaClient } from "@/generated/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";

const prisma = new PrismaClient();

export const auth = betterAuth({
	emailAndPassword: {
		enabled: true,
	},
  database: prismaAdapter(prisma, {
    provider: "postgresql", 
  }),
});
