import hivesigner from "hivesigner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as ls from "../util/ls";

const useHivesigner = () => {
  const router = useRouter();
  const [client, setClient] = useState(null);
  const [activeUser, setActiveUser] = useState(null);

  if (!client) {
    console.log("new client");
    let initClient = new hivesigner.Client({
      app: "cold.brew",
      callbackURL: "http://localhost:3000/beta/home",
      scope: ["vote", "comment"],
      accessToken: "",
    });
    setClient(initClient);
  }

  if (client && router.query.access_token && !activeUser) {
    let token = router.query.access_token;
    if (token) {
      client.setAccessToken(token);
      ls.set("token", token);
      const user = JSON.parse(Buffer.from(token, "base64").toString("ascii"));
      setActiveUser(user.authors[0]);
    }
    router.push("/beta/home");
  }

  if (client && !ls.get("token") && activeUser) {
    setActiveUser(null);
    client.removeAccessToken();
  }

  return { client, activeUser };
};

export default useHivesigner;
