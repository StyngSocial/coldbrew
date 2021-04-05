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
  const token = localStorage.getItem("sc_token");
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
