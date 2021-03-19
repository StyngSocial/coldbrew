import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";

import { Observer } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const banner = {
    title: "Home",
    about:
      "Displays posts from #coldbrew-app. All posts from the Cold Brew app will show up here.",
  };
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=coldbrew-app&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>plz leave feedback | ?</title>
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
