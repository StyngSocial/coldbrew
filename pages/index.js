import Head from "next/head";
import Brewing from "../beta/Brewing";
// import Login from "../components/Login/Login.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cold Brew</title>
      </Head>

      <div className="container mw-100 vh-100 m-0 p-0 bg-dark text-center text-light">
        <Brewing />
      </div>
    </>
  );
}
