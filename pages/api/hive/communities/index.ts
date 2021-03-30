import type { NextApiRequest, NextApiResponse } from "next";
import hive from "@hiveio/hive-js";

type PopCommunity = {
  category: String;
  name: String;
};
type PopCommunitiesRes = Array<PopCommunity>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { limit } = req.query;
  const params = {
    limit,
  };
  return new Promise((resolve, reject) => {
    hive.api
      .callAsync("bridge.list_pop_communities", params)
      .then((resp: Array<any>) => {
        const popCommunities: PopCommunitiesRes = [];
        resp.map((hivePopCommunities) => {
          const comObj: PopCommunity = {
            category: hivePopCommunities[0],
            name: hivePopCommunities[1],
          };
          popCommunities.push(comObj);
        });
        res.status(200).send(popCommunities);
        resolve;
      })
      .catch((err: Error) => res.status(500).json(err));
  });
}
