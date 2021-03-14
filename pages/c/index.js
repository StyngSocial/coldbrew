import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import Feed from "../../components/Feed";
import AppWrapper from "../../layouts/AppWrapper";
import Beta from "../../Beta";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const c = () => {
  const [session, loading] = useSession();
  const { data, error } = useSWR("/api/hive/communities?limit=10", fetcher);

  return (
    <>
      <Head>
        <title>Communities | Cold Brew</title>
      </Head>
      {loading && <h1>Loading...</h1>}
      {!session && !loading && (
        <>
          <Beta />
        </>
      )}
      {error && <h1>Error</h1>}
      {session && !data && (
        <AppWrapper>
          Loading...
        </AppWrapper>
      )}
      {session && data && (
        <AppWrapper>
          {data.map((community) => {
            return (
              <>
                <h1>{community.name}</h1>
                <p>{community.category}</p>
              </>
            );
          })}
        </AppWrapper>
      )}
    </>
  );
};

export default c;
