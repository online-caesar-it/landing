import { env } from "@/env";
import { TUserType } from "@/shared/types/user-type";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
export const authOptions: AuthOptions = {
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
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(_, req) {
        console.log("AUTHO");
        const response = await fetch(
          `${env?.NEXT_PUBLIC_API_URL}/user/getSelf`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${req?.body?.token}`,
            },
          }
        );
        const user = await response.json();
        console.log(user, "USER");
        if (user) {
          return {
            id: user.user.id,
            email: user.userConfig.email,
            role: user.user.role,
            firstName: user.user.firstName,
            secondName: user.user.secondName,
            lastName: user.user.lastName,
            avatar: user.user.avatar,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const myUser = user as TUserType;
      if (myUser) {
        token.id = token.id;
        token.email = token.email;
        token.role = myUser.role;
        token.firstName = myUser.firstName;
        token.secondName = myUser.secondName;
        token.lastName = myUser.lastName;
        token.avatar = myUser.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      const mySession = {
        ...token,
        email: token.email || "",
      };
      session.user = {
        ...mySession,
        image: token.picture || (token.avatar as string | null | undefined),
      };
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    newUser: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
