import { HivesignerClient } from "../../types/hivesigner.types";

const coldbrew_meta: Object = {
  tags: [],
  app: "Cold Brew",
  format: "UTF-8",
};

3;

export const setToken = (auth: HivesignerClient): String => {
  if (localStorage.getItem("sc_token") === null || undefined) {
    return "";
  }
};

export const comment = (
  auth,
  parent_author: String,
  parent_permlink: String,
  title: String,
  body: String
) => {
  let token = localStorage.getItem("sc_token");
  let author = JSON.parse(Buffer.from(token, "base64").toString("ascii"));
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
      if (result) {
        alert(JSON.stringify(result));
      } else if (err.result.id) {
        alert(JSON.stringify(err));
      }
    }
  );
};

export const vote = (auth, author, permlink, weight, cb) => {
  let token = localStorage.getItem("sc_token");
  let voter = JSON.parse(Buffer.from(token, "base64").toString("ascii"));
  auth.client.vote(
    voter.authors[0],
    author,
    permlink,
    weight,
    (result, err) => {
      if (result) {
        console.log(result);
        cb(false);
      } else if (err.result.id) {
        cb(true);
      }
    }
  );
};
