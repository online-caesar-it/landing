import { validateEnv } from "./src/env";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
};
validateEnv();

export default nextConfig;
