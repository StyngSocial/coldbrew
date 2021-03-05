import Head from "next/head";
import AppWrapper from "../layouts/AppWrapper";
import Feed from "../components/Feed/Feed";
import Brewing from "../components/Brewing";
// import Login from "../components/Login/Login.jsx";

export default function Home() {
  return (
    // <div className="container mw-100 vh-100 m-0 p-0 bg-dark text-center text-light">
    //   <Brewing />
    // </div>
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
