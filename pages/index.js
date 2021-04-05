import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";

import { Observer, ColdBrew } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  useEffect(() => {
    let params = new URL(location).searchParams;
    const token = params.get("access_token");
    if (token) {
      localStorage.setItem("sc_token", token);
    }
  }, []);
  const banner = {
    title: "Home",
    about: "All posts from the lucky few using the Cold Brew app.",
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

      {data && <FeedModule data={data} banner={banner} error={error} />}
    </>
  );
}
