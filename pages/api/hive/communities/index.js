import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { limit } = req.query;
  const params = {
    limit,
  };
  hive.api
    .callAsync("bridge.list_pop_communities", params)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => res.json({ error: err }));
}
