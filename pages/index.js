import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../layouts/app/AppWrapper";
import HomeFeed from "../components/HomeFeed/HomeFeed";
import Login from "../components/Login/Login.jsx";
import Nav from "../components/Nav/Nav";

export default function Home() {
  const [session] = useSession();
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
          <HomeFeed />
        </AppWrapper>
      )}
    </>
  );
}
