import HivesignerContext from "../common/components/hivesigner/HivesignerContext";
import useHivesigner from "../common/modules/useHivesigner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  const { client, activeUser } = useHivesigner();
  return (
    <HivesignerContext.Provider
      value={{ client: client, activeUser: activeUser }}
    >
      <Component {...pageProps} />
    </HivesignerContext.Provider>
  );
}

export default MyApp;
