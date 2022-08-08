import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import ColdBrewPost from "../../../../common/components/ColdBrewPost/";
import ColdBrewComment from "../../../../common/components/ColdBrewComment";
import AppWrapper from "../../../../common/modules/AppWrapper";
import { Observer } from "../../../../common/util/constants";
import {useHiveStore} from "../../../../common/store/useHiveStore"
import { useEffect, useState } from "react";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function User() {
  const router = useRouter();
  const { username, permlink } = router.query;
  const [post, setPost] = useState()
  const {getPost} = useHiveStore()
  const userPost = async () => {
    if (username) {
      const posts = await getPost(username, permlink)
      setPost(posts)
      console.log("userPost()", post)
    }
  }
  useEffect(() => {
    userPost()
  }, [])
  let index = 0;
  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      <AppWrapper>
        {post &&
          post.map((post) => {
            console.log("Post",post)
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
