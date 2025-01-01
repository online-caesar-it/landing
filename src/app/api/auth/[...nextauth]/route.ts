"use server";

import NextAuth from "next-auth";
import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

const authOptions = {
  providers: [
    VKProvider({
      clientId: String(process.env.NEXT_PUBLIC_VK_CLIENT_ID),
      clientSecret: String(process.env.NEXT_PUBLIC_VK_CLIENT_SECRET),
    }),
    YandexProvider({
      clientId: "b5348efe229e452f9a7d31914dcfc932",
      clientSecret: "5cee1fa019aa4d3a8f8e447fc978c96a",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
