import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import FeedModule from "../modules/Feed.module";
import useHivesigner from "../components/hivesigner/useHivesigner";

import { Observer, ColdBrew } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const banner = {
    title: "Home",
    about: "All posts from the lucky few using the Cold Brew app.",
  };
  const { data, error } = useSWR(
    `/api/hive/rankedposts?sort=created&tag=${ColdBrew}&observer=${Observer}`,
    fetcher
  );
  const auth = useHivesigner();
  console.log(auth);
  const login = () => {
    auth.client.login({ username: "benny.blockchain" });
  };
  const logout = () => {
    let params = new URL(location).searchParams;
    const token =
      params.get("access_token") || localStorage.getItem("sc_token");
    console.log(token);
    auth.client.removeAccessToken();
    console.log(auth.client);
  };
  const post = () => {
    const jsonMetadata = {
      tags: ["hive-152197", "coldbrew-dev"],
      app: "cold.brew",
      format: "markdown",
    };
    const json_metadata = JSON.stringify(jsonMetadata);
    auth.client.comment(
      "benny.blockchain",
      "sup-internet",
      "benny.blockchain",
      "post8",
      "Cold Brew Posting",
      "Test test test",
      json_metadata,
      function (response, error) {
        if (error) {
          console.log("error", error);
        } else {
          console.log("response", response);
        }
      }
    );
  };
  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      {/* <FeedModule
        session={true}
        loading={loading}
        data={data}
        banner={banner}
        error={error}
      /> */}
      <button onClick={login}>Log in</button>
      <button onClick={logout}>Log out</button>
      <button onClick={post}>Post</button>
      <Link href="/work">
        <h1>Test page</h1>
      </Link>
    </>
  );
}
