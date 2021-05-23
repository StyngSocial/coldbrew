// Inspired by next-auth repo.
// https://github.com/nextauthjs/next-auth/blob/main/src/client/index.js
import hivesigner from "hivesigner";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as ls from "../util/ls";

const hsClient = new hivesigner.Client({
  app: "cold.brew",
  callbackURL: "http://localhost:3000/test",
  scope: ["vote", "comment"],
});

const HivesignerContext = createContext({ client: hsClient, activeUser: null });

export function useAuthSession() {
  const router = useRouter();
  const context = useContext(HivesignerContext);
  const token = router.query.access_token || ls.get("cb_token");

  if (!context.client) {
    console.log("No client", context);
  }

  useEffect(() => {
    if (!context.client.accessToken && token) {
      context.client.setAccessToken(token);
      context.client.me((err, result) => {
        // if (result) self.username = result.name; Check for correct account
        if (err) console.log("Client me error");
        localStorage.setItem("cb_token", token);
        console.log("Client.me call", result);
        context.activeUser = result;
      });
    }
  });

  return context;
}

export function login(client) {
  client.login("benny.blockchain", function (err, token) {
    console.log("Log in result", err, token);
    if (err) return (self.isLoading = false);
    client.setAccessToken(token);

    client.me(function (err, result) {
      console.log("Verification result", err, result);
      if (result) self.username = result.name;
      if (err) self.error = err;
      localStorage.setItem("sc_token", token);
      self.isLoading = false;
    });
  });
}
