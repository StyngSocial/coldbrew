import hivesigner from "hivesigner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as ls from "../util/ls";

const useHivesigner = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState(null);
  const [client, setClient] = useState(null);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const token = ls.get("token") || router.query.access_token;
    if (!token) {
      setAccessToken("");
    } else {
      setAccessToken(token);
      const user = JSON.parse(Buffer.from(token, "base64").toString("ascii"));
      setActiveUser(user.authors[0]);
    }
  }, []);

  if (router.query.access_token) {
    router.push("/beta/home");
  }

  if (!client) {
    let initClient = new hivesigner.Client({
      app: "cold.brew",
      callbackURL: "http://192.168.1.104:3000/beta/home",
      scope: ["vote", "comment"],
      accessToken: "ben",
    });
    setClient(initClient);
  }

  if (accessToken) {
    client.setAccessToken(accessToken);
  }

  return { client, activeUser };
};

export default useHivesigner;
