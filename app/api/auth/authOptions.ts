import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) return null;
        const user = await prisma.account.findFirst({
          where: {
            email,
            websiteCreatedAt: "United eVisa Site",
          },
        });
        if (!user || !user.password) return null;
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;
        return {
          id: user.id,
          name: user.fullName,
          email: user.email,
          areaCode: user.areaCode,
          phoneNumber: user.phoneNumber
        };
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async jwt({ token, user }: { token: import("next-auth/jwt").JWT; user?: import("next-auth").User & { areaCode?: string; phoneNumber?: string } }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.areaCode = user.areaCode;
        token.phoneNumber = user.phoneNumber;
      }
      return token;
    },
    async session({ session, token }: { session: import("next-auth").Session; token: import("next-auth/jwt").JWT }) {
      if (token && session.user) {
        (session.user as { id?: string }).id = (token as { id?: string }).id;
        (session.user as { areaCode?: string }).areaCode = (token as { areaCode?: string }).areaCode;
        (session.user as { phoneNumber?: string }).phoneNumber = (token as { phoneNumber?: string }).phoneNumber;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}; 