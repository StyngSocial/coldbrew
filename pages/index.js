import Head from "next/head";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/beta/home" passHref>
        <h1>Beta</h1>
      </Link>
    </>
  );
}
