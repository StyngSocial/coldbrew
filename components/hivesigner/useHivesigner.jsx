import { useEffect, useContext, createContext } from "react";
// import HivesignerContext from "./HivesignerContext";

export const HivesignerContext = createContext({ client: null });

export default function useHivesigner() {
  const auth = useContext(HivesignerContext);

  useEffect(() => {
    let params = new URL(location).searchParams;
    const token =
      params.get("access_token") || localStorage.getItem("cb_token");

    if (token) {
      auth.client.setAccessToken(token);
      auth.client.me(function (err, result) {
        localStorage.setItem("cb_token", token);
        console.log(err, result);
      });
    } else {
      console.log("something happened or first load");
    }
  }, []);
  return auth;
}
