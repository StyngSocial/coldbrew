import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import ColdBrewPost from "../../../../components/ColdBrewPost/";
import ColdBrewComment from "../../../../components/ColdBrewComment";
import AppWrapper from "../../../../modules/AppWrapper";
import Loading from "../../../../components/Loading";
import { Observer } from "../../../../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function User() {
  const router = useRouter();
  const { username, permlink } = router.query;
  const { data, error } = useSWR(
    `/api/hive/post?author=${username}&permlink=${permlink}&observer=${Observer}`,
    fetcher
  );
  if (data) console.log(data);
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
