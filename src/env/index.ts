import "dotenv/config";
import { error } from "node:console";
import { z } from "zod";

const envSchema = z.object({
  ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  PG_HOST: z.string().default("localhost"),
  PG_PORT: z.coerce.number().default(5432),
  PG_DATABASE: z.string(),
  PG_USER: z.string(),
  PG_PASSWORD: z.string(),
  JWT_SECRET: z.string().min(32),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.log("error:", _env.error.format());

  throw new Error("variaveis de ambiente envalidas");
}

export const env = _env.data;
