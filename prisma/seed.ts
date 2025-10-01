import { config } from "dotenv";
config();
import { signUp } from "@/lib/auth-client";
import { prisma } from "@/lib/prisma";

async function main() {
  const existingAdmin = await prisma.user.findUnique({
    where: {
      email: process.env.ADMIN_EMAIL,
    },
  });

  if (!existingAdmin) {
    await signUp.email({
      email: process.env.ADMIN_EMAIL as string,
      password: process.env.ADMIN_PASSWORD as string,
      name: process.env.ADMIN_NAME as string,
    });
    console.log(`Admin user created with email: ${process.env.ADMIN_EMAIL}`);
  } else {
    console.log(`Admin user already exists: ${existingAdmin?.email}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
