import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../../common/modules/Feed.module";
import { Observer, ColdBrew } from "../../common/util/constants.ts";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const trending = () => {
  const banner = {
    title: "Trending",
    about: "Top Cold Brew Posts",
  };
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=hot&tag=${ColdBrew}&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>this shit hot</title>
      </Head>

      <FeedModule data={data} loading={!data} banner={banner} error={error} />
    </>
  );
};

export default trending;
