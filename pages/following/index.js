import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import AppWrapper from "../../layouts/AppWrapper";
import Beta from "../../Beta";
import Feed from "../../components/Feed";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const following = () => {
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    "api/hive/following?sort=feed&account=benny.blockchain&limit=10",
    fetcher
  );
  return (
    <>
      <Head>
        <title>Following | Cold Brew</title>
      </Head>
      {loading && <h1>Loading...</h1>}
      {!session && !loading && (
        <>
          <Beta />
        </>
      )}
      {error && <h1>Error</h1>}
      {session && data && (
        <AppWrapper>
          <Feed posts={data} />
        </AppWrapper>
      )}
    </>
  );
};

export default following;
