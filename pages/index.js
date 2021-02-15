import Head from "next/head";
import styles from "../styles/Home.module.scss";

import AppWrapper from "../components/layouts/AppWrapper";
import Feed from "../components/Feed/Feed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cold Brew</title>
      </Head>
      <AppWrapper>
        <Feed />
      </AppWrapper>
    </>
  );
}
