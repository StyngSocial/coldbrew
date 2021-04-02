import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";
import { Observer, ColdBrew } from "../util/constants.ts";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const communities = () => {
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=${ColdBrew}&observer=${Observer}`,
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
        error={error}
      />
    </>
  );
};

export default communities;
