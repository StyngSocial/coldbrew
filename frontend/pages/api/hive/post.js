import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { author, permlink, observer } = req.query;
  const params = {
    author,
    permlink,
    observer,
  };
  return new Promise((resolve, reject) => {
    hive.api
      .callAsync("bridge.get_discussion", params)
      .then((resp) => {
        const posts = Object.values(resp);
        res.status(200).send(posts);
        resolve;
      })
      .catch((err) => res.send(err));
  });
}
