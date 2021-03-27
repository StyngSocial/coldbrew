import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import ColdBrewPost from "../../../components/ColdBrewPost";
import AppWrapper from "../../../modules/AppWrapper";

import { Observer } from "../../../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function User() {
  const router = useRouter();
  const { username, permlink } = router.query;

  const { data, error } = useSWR(
    `/api/hive/post?author=${username}&permlink=${permlink}&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      <AppWrapper>
        {data && (
          <ColdBrewPost
            key={data.post_id}
            post={data}
            permlink={data.permlink}
          />
        )}
      </AppWrapper>
    </>
  );
}
