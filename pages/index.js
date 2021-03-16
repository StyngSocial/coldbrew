import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    "/api/hive/rankedposts?sort=trending&tag=coldbrew-app&observer=benny.blockchain",
    fetcher
  );

  return (
    <>
      <Head>
        <title>Beta! | Cold Brew</title>
      </Head>
      <FeedModule
        session={session}
        loading={loading}
        data={data}
        error={error}
      />
    </>
  );
}
