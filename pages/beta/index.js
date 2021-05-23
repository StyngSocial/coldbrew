import { useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../../common/modules/Feed.module";
import { Observer, ColdBrew } from "../../common/util/constants";
import { useRouter } from "next/router";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/beta");
  }, []);
  const banner = {
    title: "Home",
    about: "All posts from the beta testers of Cold Ƀrew.",
  };
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=${ColdBrew}&observer=${Observer}`,
    fetcher
  );

  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      <FeedModule data={data} loading={!data} banner={banner} error={error} />
    </>
  );
}
