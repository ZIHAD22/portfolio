import { dbConnect } from "@/lib/dbConnect";
import { Db } from "mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials) {
          return { message: "please provide info" };
        }
        const db = (await dbConnect()) as Db;
        const userCollection = db.collection("admin");
        const findUser = await userCollection.findOne({
          email: credentials?.email,
        });

        if (!findUser) {
          return null;
        }

        return findUser;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
