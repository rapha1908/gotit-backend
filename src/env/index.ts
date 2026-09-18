import "dotenv/config";
import { error } from "node:console";
import { z } from "zod";

const envSchema = z.object({
  ENV: z.enum(["developement", "production"]).default("developement"),
  PORT: z.coerce.number().default(3000),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.log("error:", _env.error.format());

  throw new Error("variaveis de ambiente envalidas");
}

export const env = _env.data;
