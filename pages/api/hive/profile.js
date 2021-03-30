import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { account, observer } = req.query;
  const params = {
    account,
    observer,
  };
  return new Promise((resolve, reject) => {
    hive.api
      .callAsync("bridge.get_profile", params)
      .then((resp) => {
        res.status(200).send(resp);
        resolve;
      })
      .catch((err) => res.send(err));
  });
}
