import { Provider } from "next-auth/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  if (pageProps.session) {
    console.log(`Session: ${pageProps.session}`);
  }
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
