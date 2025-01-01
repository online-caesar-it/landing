import { env } from "@/env";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

const authOptions = {
  providers: [
    VKProvider({
      clientId: env?.NEXT_PUBLIC_VK_CLIENT_ID || "",
      clientSecret: env?.NEXT_PUBLIC_VK_CLIENT_SECRET || "",
    }),
    YandexProvider({
      clientId: env?.NEXT_PUBLIC_YANDEX_CLIENT_ID || "",
      clientSecret: env?.NEXT_PUBLIC_YANDEX_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${env?.NEXT_PUBLIC_API_URL}/auth/register`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(credentials),
            }
          );

          if (!response.ok) {
            throw new Error(
              `API request failed with status: ${response.status}`
            );
          }

          const data = await response.json();
          console.log("API response data:", data);

          return data;
        } catch (error) {
          console.error("Error during API request:", error);
          throw new Error("Failed to authorize");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
