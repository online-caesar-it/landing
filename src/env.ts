import { z } from "zod";
import { configDotenv } from "dotenv";
configDotenv();
const envSchema = z.object({
  VK_CLIENT_ID: z.string().min(1, "VK_CLIENT_ID is required"),
  VK_CLIENT_SECRET: z.string().min(1, "VK_CLIENT_SECRET is required"),
  YANDEX_CLIENT_ID: z.string().min(1, "YANDEX_CLIENT_ID is required"),
  YANDEX_CLIENT_SECRET: z.string().min(1, "YANDEX_CLIENT_SECRET is required"),
  NEXTAUTH_URL: z.string().url("NEXTAUTH_URL must be a valid URL"),
  NEXTAUTH_SECRET: z.string().min(1, "NEXTAUTH_SECRET is required"),
});

export const validateEnv = () => {
  try {
    envSchema.parse(process.env);
    console.log("Environment variables are valid");
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.error("Invalid environment variables:", e.errors);
      process.exit(1);
    }
  }
};
