import NextAuth from "next-auth";
import Providers from "next-auth/providers";
// import { site, id, secret } from "../../../config/linkedin";

export default NextAuth({
  site: "https:coldbrew.live",
  providers: [
    Providers.LinkedIn({
      clientId: process.env.NEXTAUTH_LINKEDIN_ID,
      clientSecret: process.env.NEXTAUTH_LINKEDIN_SECRET,
    }),
  ],
});
