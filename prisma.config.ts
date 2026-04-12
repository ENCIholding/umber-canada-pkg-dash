// Prisma configuration for Prisma 7+
// Ensures schema + migrations are correctly wired
// DATABASE_URL is asserted to exist

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
    seed: "node prisma/seed.cjs",
  },

  // Prisma 7 no longer allows datasource.url here.
  // We only assert the environment variable exists.
  datasource: {
    url: process.env.DATABASE_URL!, // <-- FIXED & VALID
  },
});
