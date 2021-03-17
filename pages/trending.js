import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import CommunitiesModule from "../modules/Communities.module";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const trending = () => {
  const [session, loading] = useSession();
  const { data, error } = useSWR("/api/hive/communities?limit=10", fetcher);
  return (
    <>
      <Head>
        <title>this shit hot</title>
      </Head>

      <CommunitiesModule
        session={session}
        loading={loading}
        data={data}
        error={error}
      />
    </>
  );
};

export default trending;
