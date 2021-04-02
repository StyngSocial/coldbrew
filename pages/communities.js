import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";
import { Observer, ColdBrew } from "../util/constants.ts";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const communities = () => {
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=${ColdBrew}&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>this shit hot</title>
      </Head>

      {data && <FeedModule data={data} banner={banner} error={error} />}
    </>
  );
};

export default communities;
