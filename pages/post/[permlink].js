import Head from "next/head";
import { useRouter } from "next/router";
// import {useSession} from "next/client"
import axios from "axios";
import useSWR from "swr";
import AppWrapper from "../../modules/AppWrapper";
import Post from "../../components/Post.jsx";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const post = () => {
  const router = useRouter();
  const { permlink, author, observer } = router.query;
  const { data, error } = useSWR(
    `/api/hive/post?author=${author}&permlink=${permlink}&observer=${observer}`,
    fetcher
  );

  return (
    <>
      <Head>
        <title>{author}</title>
      </Head>
      {error && <h1>{error}</h1>}
      {!data && <AppWrapper>Loading...</AppWrapper>}
      {data && (
        <AppWrapper>
          <Post post={data} />
        </AppWrapper>
      )}
    </>
  );
};

export default post;
