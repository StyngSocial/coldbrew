import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../../layouts/AppWrapper";
import Welcome from "../../beta/Welcome";

const explore = () => {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Explore | Cold Brew</title>
      </Head>
      {!session && (
        <>
          <Welcome />
        </>
      )}
      {loading && <h1>Loading...</h1>}
      {session && (
        <AppWrapper>
          useExplore? <br /> useTrendingCommunities? <br />
          useTrendingDiscussions?
        </AppWrapper>
      )}
    </>
  );
};

export default explore;
