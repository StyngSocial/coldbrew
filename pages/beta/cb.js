import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";
import AppWrapper from "../../common/modules/AppWrapper";

const coldbrew = () => {
  return (
    <>
      <Head>
        <title>grab a coffee, stay a while</title>
      </Head>
      <AppWrapper>
        <div className="text-center mt-5">
          <Image src={logo} width={200} height={200} />
          <h1 style={{ fontFamily: "Dancing Script" }}>Coming Soon...</h1>
          <p>Cold Ƀrew FAQ</p>
        </div>
      </AppWrapper>
    </>
  );
};

export default coldbrew;
