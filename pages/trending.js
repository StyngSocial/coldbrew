import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";
import { Observer, ColdBrew } from "../util/constants.ts";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const trending = () => {
  const banner = {
    title: "Trending",
    about: "Top Cold Brew Posts",
  };
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=hot&tag=${ColdBrew}&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>this shit hot</title>
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

export default trending;
