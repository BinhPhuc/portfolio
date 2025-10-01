import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
