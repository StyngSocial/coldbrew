import { useEffect } from "react";
import Head from "next/head";
import FeedModule from "../../common/modules/Feed.module";
import {useHiveStore} from "../../common/store/useHiveStore"
import {useAppStore} from "../../common/store/useAppState"

export default function Home() {
  const {posts, getHiveRankedPosts} = useHiveStore()
  const {loading, setLoadingTrue, setLoadingFalse} = useAppStore()
  
  useEffect(() => {
    setLoadingTrue()
    getHiveRankedPosts()
    setLoadingFalse()
  }, []);
  const banner = {
    title: "Home",
    about: "All posts from the beta testers of Cold Ƀrew.",
  };

  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      <FeedModule data={posts} loading={loading} banner={banner} />
    </>
  );
}
