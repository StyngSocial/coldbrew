import Head from "next/head";
import AppWrapper from "../layouts/app/AppWrapper";
import HomeFeed from "../components/HomeFeed/HomeFeed";
// import Login from "../components/Login/Login.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cold Brew</title>
      </Head>

      <AppWrapper>
        <HomeFeed />
      </AppWrapper>
    </>
  );
}
