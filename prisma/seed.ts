import { serverEnv } from "@/data/env/server";
import { PrismaClient } from "../generated/prisma";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.user.findUnique({
    where: {
      email: serverEnv.ADMIN_EMAIL,
    },
  });

  // TODO: Signup admin user via better-auth
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
