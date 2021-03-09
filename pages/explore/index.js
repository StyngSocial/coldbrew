import Head from "next/head";
import { useSession } from "next-auth/client";
import AppWrapper from "../../layouts/AppWrapper";
import Beta from "../../Beta";
import usePopularCommunities from "../../hooks/usePopularCommunities";

const explore = () => {
  const [session] = useSession();
  const [{ communities, loading, error }] = usePopularCommunities("10");
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
          {communities.map((comm) => {
            return (
              <>
                <h3>{comm[1]}</h3>
                <p className="text-muted">Title</p>
              </>
            );
          })}
        </AppWrapper>
      )}
    </>
  );
};

export default explore;
