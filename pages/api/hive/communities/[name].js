import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { name, observer } = req.query;
  const params = {
    name,
    observer,
  };
  return new Promise((resolve, reject) => {
    hive.api
      .callAsync("bridge.get_community", params)
      .then((resp) => {
        res.status(200).send(resp);
        resolve;
      })
      .catch((err) => res.send(err));
  });
}
