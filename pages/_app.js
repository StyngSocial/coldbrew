import { HivesignerContext } from "../components/hivesigner/useHivesigner";
import hivesigner from "hivesigner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  const client = new hivesigner.Client({
    app: "cold.brew",
    callbackURL: "http://localhost:3000/work",
    scope: ["vote", "comment"],
  });
  return (
    <HivesignerContext.Provider value={{ client: client }}>
      <Component {...pageProps} />
    </HivesignerContext.Provider>
  );
}

export default MyApp;
