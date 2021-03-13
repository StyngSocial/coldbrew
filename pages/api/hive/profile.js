import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { account, observer } = req.query;
  const params = {
    account,
    observer,
  };
  hive.api
    .callAsync("bridge.get_profile", params)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => res.send(err));
}
