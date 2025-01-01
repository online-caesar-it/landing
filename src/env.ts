import { config } from "dotenv";
import { z } from "zod";

config();

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  NEXT_PUBLIC_VK_CLIENT_ID: z.string().min(1, "VK_CLIENT_ID is required"),
  NEXT_PUBLIC_VK_CLIENT_SECRET: z
    .string()
    .min(1, "VK_CLIENT_SECRET is required"),
  NEXT_PUBLIC_YANDEX_CLIENT_ID: z
    .string()
    .min(1, "YANDEX_CLIENT_ID is required"),
  NEXT_PUBLIC_YANDEX_CLIENT_SECRET: z
    .string()
    .min(1, "YANDEX_CLIENT_SECRET is required"),
  NEXT_PUBLIC_API_URL: z.string().min(1, "NEXT_PUBLIC_API_URL is required"),
});

const envObj = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_VK_CLIENT_ID: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
  NEXT_PUBLIC_VK_CLIENT_SECRET: process.env.NEXT_PUBLIC_VK_CLIENT_SECRET,
  NEXT_PUBLIC_YANDEX_CLIENT_ID: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
  NEXT_PUBLIC_YANDEX_CLIENT_SECRET:
    process.env.NEXT_PUBLIC_YANDEX_CLIENT_SECRET,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};
let _env;

try {
  _env = EnvSchema.parse(envObj);
} catch (error) {
  if (!process.env.SKIP_ENV_VALIDATION) {
    console.error(error);
    process.exit(1);
  }
  console.log("SKIP ENV VALIDATION");
}

export const env = _env;
