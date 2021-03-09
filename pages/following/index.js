import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../../layouts/AppWrapper";
import Beta from "../../Beta";
import FollowingFeed from "../../components/FollowingFeed";
const following = () => {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Following | Cold Brew</title>
      </Head>
      {!session && (
        <>
          <Beta />
        </>
      )}
      {loading && <h1>Loading...</h1>}
      {session && (
        <AppWrapper>
          <FollowingFeed />
        </AppWrapper>
      )}
    </>
  );
};

export default following;
