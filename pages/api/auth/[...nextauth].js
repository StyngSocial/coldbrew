import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { site, id, secret } from "../../../config/linkedin";

export default NextAuth({
  providers: [
    Providers.LinkedIn({
      clientId: id,
      clientSecret: secret,
    }),
  ],
});
