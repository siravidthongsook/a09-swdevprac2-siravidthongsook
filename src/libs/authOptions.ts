import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import getUserProfile from "@/libs/getUserProfile";
import userLogIn from "@/libs/userLogIn";

type LoginResult = Record<string, unknown>;
type ProfileResult = Record<string, unknown> & {
  data?: Record<string, unknown>;
};

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? "venue-explorer-dev-secret",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim() ?? "";
        const password = credentials?.password ?? "";

        if (!email || !password) {
          return null;
        }

        const loginResult = (await userLogIn(email, password)) as LoginResult;
        const token = (loginResult.token as string | undefined) ?? "";

        if (!token) {
          return null;
        }

        let profileResult: ProfileResult | null = null;

        try {
          profileResult = (await getUserProfile(token)) as ProfileResult;
        } catch {
          profileResult = null;
        }

        const profileData = profileResult?.data ?? {};

        return {
          id: String(profileData._id ?? loginResult._id ?? email),
          name: String(profileData.name ?? loginResult.name ?? ""),
          email: String(profileData.email ?? loginResult.email ?? email),
          tel: String(profileData.tel ?? loginResult.tel ?? ""),
          role: String(profileData.role ?? loginResult.role ?? "user"),
          createdAt: String(profileData.createdAt ?? loginResult.createdAt ?? ""),
          token,
        } as User;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const profileUser = user as User;

        token.userId = profileUser.id;
        token.name = profileUser.name;
        token.email = profileUser.email;
        token.tel = profileUser.tel;
        token.role = profileUser.role;
        token.createdAt = profileUser.createdAt;
        token.token = profileUser.token;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user._id = String(token.userId ?? token.sub ?? "");
        session.user.name = String(token.name ?? session.user.name ?? "");
        session.user.email = String(token.email ?? session.user.email ?? "");
        session.user.tel = String(token.tel ?? "");
        session.user.role = String(token.role ?? "user");
        session.user.token = String(token.token ?? "");
        session.user.createdAt = String(token.createdAt ?? "");
      }

      return session;
    },
  },
};
