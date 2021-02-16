import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../layouts/AppWrapper";
import Feed from "../components/Feed/Feed";
import LogIn from "../components/LogIn/LogIn";

export default function Home() {
  const [session, loading] = useSession();
  console.log("SESSION", session);
  return (
    <>
      <Head>
        <title>Cold Brew</title>
      </Head>
      {!session && (
        <AppWrapper>
          <LogIn />
        </AppWrapper>
      )}
      {session && (
        <AppWrapper>
          <Feed />
        </AppWrapper>
      )}
    </>
  );
}
