import Head from "next/head";
import AppWrapper from "../layouts/AppWrapper";
import Feed from "../components/Feed/Feed";
// import Login from "../components/Login/Login.jsx";

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
