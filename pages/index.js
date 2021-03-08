import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../layouts/AppWrapper";
import Beta from "../Beta";
// import Feed from "../components/Feed";

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
          <Beta />
        </>
      )}
      {loading && <h1>Loading...</h1>}
      {session && (
        <AppWrapper>
          <p>useProfileFeed</p>
        </AppWrapper>
      )}
    </>
  );
}
