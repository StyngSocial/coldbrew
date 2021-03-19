import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";

import { LeoFinance, Observer } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const stonks = () => {
  const banner = {
    title: "Stonks",
    about:
      "Curated posts from LeoFinance. A community on HIVE that post about stocks and crypto.",
  };
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=trending&tag=${LeoFinance}&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>stonks</title>
      </Head>
      <FeedModule
        session={session}
        loading={loading}
        data={data}
        banner={banner}
        error={error}
      />
    </>
  );
};

export default stonks;
