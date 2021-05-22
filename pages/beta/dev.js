import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../../common/modules/Feed.module";
import { Observer } from "../../common/util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const dev = () => {
  const banner = {
    title: "Developer Notes",
    about:
      "Updates on bug fixes, new features, and release notes from the Cold Brew developer team.",
  };
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=coldbrew-dev&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>dev log</title>
      </Head>
      <FeedModule data={data} loading={!data} banner={banner} error={error} />
    </>
  );
};

export default dev;
