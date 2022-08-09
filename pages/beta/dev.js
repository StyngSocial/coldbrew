import { useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../../common/modules/Feed.module";
import { Observer } from "../../common/util/constants";
import {useHiveStore, useAppStore} from "../../common/store"

const fetcher = (url) => axios.get(url).then((r) => r.data);

const dev = () => {
  const {posts, getRankedPosts} = useHiveStore()
  const {loading, setLoadingTrue, setLoadingFalse} = useAppStore()
  const banner = {
    title: "Developer Notes",
    about:
      "Updates on bug fixes, new features, and release notes from the Cold Brew developer team.",
  };
  
  useEffect(() => {
    setLoadingTrue()
    getRankedPosts("coldbrew-dev")
    setLoadingFalse()
  }, []);
  return (
    <>
      <Head>
        <title>dev log</title>
      </Head>
      <FeedModule data={posts} loading={loading} banner={banner} />
    </>
  );
};

export default dev;
