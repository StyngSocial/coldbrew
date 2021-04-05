import Head from "next/head";
import { useEffect, useContext } from "react";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";
import HivesignerContext from "../components/hivesigner/HivesignerContext";

import { Observer, ColdBrew } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const auth = useContext(HivesignerContext);

  useEffect(() => {
    let params = new URL(location).searchParams;
    const token = params.get("access_token");
    console.log("Pre token", auth.client);
    if (token) {
      auth.client.setAccessToken(token);
      localStorage.setItem("cb_token", token);
    } else {
      console.log("something happened or first load");
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
