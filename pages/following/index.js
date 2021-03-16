import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../../modules/Feed.module";

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
      <FeedModule
        session={session}
        loading={loading}
        data={data}
        error={error}
      />
    </>
  );
};

export default following;
