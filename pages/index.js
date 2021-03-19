import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";

import { Observer, ColdBrew } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const banner = {
    title: "Home",
    about: "All posts from beta testers using the Cold Brew app.",
  };
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=${ColdBrew}&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>plz leave feedback (click {"->"} ?)</title>
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
}
