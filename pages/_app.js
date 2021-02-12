import Layout from "../components/Layout/";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
