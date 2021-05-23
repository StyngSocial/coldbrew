import hivesigner from "hivesigner";
import { useState } from "react";
import { useRouter } from "next/router";
import * as ls from "../util/ls";

const useHivesigner = () => {
  const router = useRouter();
  const [client, setClient] = useState(null);
  const [activeUser, setActiveUser] = useState(null);

  if (!client && activeUser) {
    let token = ls.get("token");
    let refreshClient = new hivesigner.Client({
      app: "cold.brew",
      callbackURL: "http://coldbrew.live/beta",
      scope: ["vote", "comment"],
      accessToken: token,
    });
    setClient(refreshClient);
  }

  if (!client) {
    let initClient = new hivesigner.Client({
      app: "cold.brew",
      callbackURL: "http://coldbrew.live/beta",
      scope: ["vote", "comment"],
      accessToken: "",
    });
    setClient(initClient);
  }

  if (client && router.query.access_token && !activeUser) {
    let token = router.query.access_token;
    console.log(router.query);
    if (token) {
      client.setAccessToken(token);
      ls.set("token", token);
      const user = JSON.parse(Buffer.from(token, "base64").toString("ascii"));
      setActiveUser(user.authors[0]);
      console.log("set client token line:30", client);
    }
    router.push("/beta");
  }

  if (client && !ls.get("token") && activeUser) {
    setActiveUser(null);
    client.removeAccessToken();
  }

  return { client, activeUser };
};

export default useHivesigner;
