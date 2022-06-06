import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import { getToken } from "next-auth/jwt";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  jwt: {
    // A secret to use for key generation. Defaults to the top-level `secret`.
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behavior.
    async encode({ secret, token, maxAge }) {},
    async decode({ secret, token }) {},
  },
});
