import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.LinkedIn({
      clientId: process.env.NEXTAUTH_LINKEDIN_ID,
      clientSecret: process.env.NEXTAUTH_LINKEDIN_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.NEXTAUTH_TWITTER_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_TWITTER_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET,
    }),
  ],
});
