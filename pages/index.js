import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Container } from "react-bootstrap";
import logo from "../public/logo.png";

export default function Work() {
  const router = useRouter();
  useEffect(() => {
    router.push("/beta");
  }, []);
  return (
    <>
      <Head>
        <title>Cold Brew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="text-center mt-5 pt-5 vh-100 bg-greenlight" fluid>
        <Image src={logo} width={150} height={150} />
        <h1 style={{ fontFamily: "Dancing Script" }}>Cold Brew</h1>
        {/* 
        <Link href="/beta" passHref>
          <Button className="py-2 px-4 text-light">Beta</Button>
        </Link> */}
      </Container>
    </>
  );
}
