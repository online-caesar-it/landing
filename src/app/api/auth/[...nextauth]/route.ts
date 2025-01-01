import NextAuth from "next-auth";
import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

const authOptions = {
  providers: [
    VKProvider({
      clientId: String(process.env.VK_CLIENT_ID),
      clientSecret: String(process.env.VK_CLIENT_SECRET),
    }),
    YandexProvider({
      clientId: String(process.env.YANDEX_CLIENT_ID),
      clientSecret: String(process.env.YANDEX_CLIENT_SECRET),
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
