import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { limit } = req.query;
  const params = {
    limit,
  };
  hive.api
    .callAsync("bridge.list_pop_communities", params)
    .then((resp) => {
      const popCommunities = [];
      resp.map((comArray) => {
        const comObj = {
          category: comArray[0],
          name: comArray[1],
        };
        popCommunities.push(comObj);
      });
      res.status(200).send(popCommunities);
    })
    .catch((err) => res.json({ error: err }));
}
