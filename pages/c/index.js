import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../../layouts/AppWrapper";
import Beta from "../../Beta";

const c = () => {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Communities | Cold Brew</title>
      </Head>
      {!session && (
        <>
          <Beta />
        </>
      )}
      {loading && <h1>Loading...</h1>}
      {session && <AppWrapper>useProfileCommunityFeed</AppWrapper>}
    </>
  );
};

export default c;
