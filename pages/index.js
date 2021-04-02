import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";
import useHivesigner from "../components/hivesigner/useHivesigner";

import { Observer, ColdBrew } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const banner = {
    title: "Home",
    about: "All posts from the lucky few using the Cold Brew app.",
  };
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=${ColdBrew}&observer=${Observer}`,
    fetcher
  );
  const auth = useHivesigner();
  console.log(auth);

  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      {data && <FeedModule data={data} banner={banner} error={error} />}
    </>
  );
}
