import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useSession } from "next-auth/client";
import AppWrapper from "../components/layouts/AppWrapper";
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
