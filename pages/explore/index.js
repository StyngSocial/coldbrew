import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../../layouts/AppWrapper";
import Beta from "../../Beta";

const explore = () => {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Explore | Cold Brew</title>
      </Head>
      {!session && (
        <>
          <Beta />
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
