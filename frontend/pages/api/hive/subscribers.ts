import type { NextApiRequest, NextApiResponse } from "next";
import hive from "@hiveio/hive-js";

type Subscriber = {
  username: String;
  role: String;
  date: Date;
};
type SubscribersResp = Array<Subscriber>;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { community, last, limit } = req.query;
  const params = { community, last, limit };
  return new Promise((resolve, reject) => {
    hive.api
      .callAsync("bridge.list_subscribers", params)
      .then((subscribers) => {
        const communitySubs: SubscribersResp = [];
        subscribers.map((subs) => {
          const subObj: Subscriber = {
            username: subs[0],
            role: subs[1],
            date: new Date(subs[2]),
          };
          communitySubs.push(subObj);
        });
        res.status(200).send(communitySubs);
        resolve;
      });
  });
}
