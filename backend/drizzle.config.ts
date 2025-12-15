import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

if (!process.env.SUPABASE_URL) {
  throw new Error("DATABASE_URL is required; ensure the database is provisioned");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SUPABASE_URL,
  },
});
