import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../common/styles/global.scss";
import "../common/styles/custom.scss";
import HivesignerContextProvider, {
  HivesignerContext,
} from "../common/hooks/useAuth";

function MyApp({ Component, pageProps }) {
  // const auth = useContext(HivesignerContext);
  return (
    // <HivesignerContextProvider value={auth}>
      <Component {...pageProps} />
    // </HivesignerContextProvider>
  );
}

export default MyApp;
