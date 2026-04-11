require("dotenv/config");

const { PrismaClient, UserRole } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const bcrypt = require("bcryptjs");

// Ensure DATABASE_URL exists
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is missing");
}

// Prisma 7 requires an adapter
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  const passwordHash = await bcrypt.hash("testumber", 10);

  await prisma.user.upsert({
    where: { username: "umbercanada" },
    update: {
      email: "umbercanadapkg@gmail.com",
      passwordHash,
      role: UserRole.ADMIN,
      isActive: true,
      fullName: "Umber Canada Admin",
    },
    create: {
      username: "umbercanada",
      email: "umbercanadapkg@gmail.com",
      passwordHash,
      role: UserRole.ADMIN,
      isActive: true,
      fullName: "Umber Canada Admin",
    },
  });

  console.log("seed success");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
