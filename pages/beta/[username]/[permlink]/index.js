import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import ColdBrewPost from "../../../../common/components/ColdBrewPost/";
import ColdBrewComment from "../../../../common/components/ColdBrewComment";
import AppWrapper from "../../../../common/modules/AppWrapper";
import { Observer } from "../../../../common/util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function User() {
  const router = useRouter();
  const { username, permlink } = router.query;

  const { data, error } = useSWR(
    `/api/hive/post?author=${username}&permlink=${permlink}&observer=${Observer}`,
    fetcher
  );

  let index = 0;
  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      <AppWrapper>
        {data &&
          data.map((post) => {
            if (index !== 0) {
              index++;
              return <ColdBrewComment key={post.post_id} post={post} />;
            } else {
              index++;
              return <ColdBrewPost key={post.post_id} post={post} />;
            }
          })}
      </AppWrapper>
    </>
  );
}
//  <ColdBrewPost key={data[0].post_id} post={data[0].post} />
