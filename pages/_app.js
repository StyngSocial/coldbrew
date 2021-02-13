import AppWrapper from "../components/layouts/AppWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper />
    </>
  );
}

export default MyApp;
