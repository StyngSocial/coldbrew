import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../layouts/AppWrapper";
import Feed from "../components/Feed/Feed";
import Login from "../components/Login/Login";
import Nav from "../components/Nav/Nav";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Cold Brew</title>
      </Head>
      {!session && (
        <>
          <Nav />
          <Login />
        </>
      )}
      {session && (
        <AppWrapper>
          <Feed />
        </AppWrapper>
      )}
    </>
  );
}
