import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Twitter({
      clientId: process.env.NEXTAUTH_TWITTER_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_TWITTER_CLIENT_SECRET,
    }),
  ],
});
