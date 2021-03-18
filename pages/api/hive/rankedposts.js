import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { sort, tag, observer } = req.query;
  const params = {
    sort,
    tag,
    observer,
  };
  hive.api
    .callAsync("bridge.get_ranked_posts", params)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((resp) => res.json({ error: resp }));
}
