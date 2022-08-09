import Head from "next/head";
import FeedModule from "../../common/modules/Feed.module";
import { useHiveStore, useAppStore } from "../../common/store";
import { useEffect } from "react";

const trending = () => {
  const {posts, getTrendingPosts} = useHiveStore()
  const {loading, setLoadingTrue, setLoadingFalse} = useAppStore()

  const banner = {
    title: "Trending",
    about: "Top Cold Brew Posts",
  };

  useEffect(() => {
    setLoadingTrue()
    getTrendingPosts()
    setLoadingFalse()
  }, [])

  return (
    <>
      <Head>
        <title>this shit hot</title>
      </Head>

      <FeedModule data={posts} loading={loading} banner={banner} />
    </>
  );
};

export default trending;
