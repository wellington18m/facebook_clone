import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId:  "769970567723122",
      clientSecret: "34035c964fb99b190261972b4973c00c"
    }),
    // ...add more providers here
  ],
});
