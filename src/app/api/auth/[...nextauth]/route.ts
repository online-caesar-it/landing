import { env } from "@/env";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

export const authOptions: NextAuthOptions = {
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
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        try {
          const response = await fetch(
            `${env?.NEXT_PUBLIC_API_URL}/auth/register`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(credentials),
            }
          );

          const data = await response.json();
          console.log(data);
          if (response.ok && data.token) {
            return {
              id: data.user.id, // Передаем ID пользователя
              email: data.user.email,
              name: data.user.name,
              role: data.role,
              token: data.token, // Токен для дальнейшего использования
            };
          }

          throw new Error(data.message || "Failed to register");
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
