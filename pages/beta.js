import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../layouts/AppWrapper";
import Feed from "../components/Feed";
import Welcome from "../beta/Welcome";
import Login from "../components/Login";

export default function Home() {
  const [session, loading] = useSession();
  if (typeof window !== "undefined" && loading) return null;
  return (
    <>
      <Head>
        <title>Beta! | Cold Brew</title>
      </Head>
      {!session && (
        <>
          <Login />
        </>
      )}
      {loading && <h1>Loading...</h1>}
      {session && (
        <AppWrapper>
          <Feed />
        </AppWrapper>
      )}
    </>
  );
}
