import hivesigner from "hivesigner";
import { useContext } from "react";
import HivesignerContext from "./HivesignerContext";

const coldbrew_meta: Object = {
  tags: [],
  app: "Cold Brew",
  format: "UTF-8",
};

export const comment = (
  auth,
  parent_author: String,
  parent_permlink: String,
  title: String,
  body: String
) => {
  const token = localStorage.getItem("cb_token");
  console.log("In broadcast auth obj", auth);
  console.log("Token", token);
  let author = JSON.parse(Buffer.from(token, "base64").toString("ascii"));
  console.log("Author", author);
  let date = new Date();
  let perm_link = `cb-${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
  auth.client.comment(
    parent_author,
    parent_permlink,
    author.authors[0],
    perm_link,
    title,
    body,
    coldbrew_meta,
    (result, err) => {
      console.log("Result", result);
      console.log("Error", err);
      if (result) {
        alert("nope");
      } else if (err.result.id) {
        alert("content submitted");
      }
    }
  );
};
