// Inspired by next-auth repo.
// https://github.com/nextauthjs/next-auth/blob/main/src/client/index.js

/**
 * TODO Remove API in pages/api/ and refactor data calls
 * TODO Use memoization for active user. This will remove profile pic on log out
 * ? Have a useAuth check hook and a withAuth HOC for protected routes?
 * * https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68
 */

import hivesigner from "hivesigner";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as ls from "../util/ls";
import { url } from "../util/constants";

// Create context to have auth access throughout app
export const HivesignerContext = createContext({client: {}, activeUser: {user: "bennyblockchain"}});

// Init client on app load
const hsClient = new hivesigner.Client({
  app: "cold.brew",
  callbackURL: url + "/beta",
  scope: ["vote", "comment"],
});

// Provider handles logic of authentication
//  1. Checks URL if there is a token in the query
//  2. useEffect grabs token in link and set token to local storage
//  3. If there is a local storage token, set it in client and set active user
//  4. useEffect is called whenever the token is changed i.e. [token, lsToken]
//  5. Returns a wrapper component that provides the client and full activeUser HIVE account
export default function HivesignerContextProvider({ children }) {
  const router = useRouter();
  const token = router.query.access_token;
  const lsToken = ls.get("token");
  const [client, setClient] = useState(hsClient);
  const [activeUser, setActiveUser] = useState();


  useEffect(() => {
    console.log("In use effect")
    if (!lsToken && !token) {
      login(hsClient)
    }
    if (token) {
      ls.set("token", token);
      router.push("/beta");
    }
    if (lsToken) {
      client.setAccessToken(lsToken);
      client.me((err, result) => {
        if (err) alert("No active user");
        setActiveUser(result);
      });
    }
  }, [token, lsToken]);

  return (
    <HivesignerContext.Provider
      value={{
        client: client,
        activeUser: activeUser,
      }}
    >
      {children}
    </HivesignerContext.Provider>
  );
}

// Functions that log in and log out a user
// Used in /common/modules/MainNav to handle auth buttons
export function logout(client) {
  client.revokeToken();
  ls.remove("token");
  alert("You have been signed out.");
}

export function login(client) {
  client.login("");
}
