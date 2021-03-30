import React from "react";

import ColdBrewPost from "../components/ColdBrewPost/";

export default {
  title: "Cold Brew Post",
  component: ColdBrewPost,
};

const Template = (args) => <ColdBrewPost {...args} />;

export const ColdBrewPostStory = Template.bind({});
ColdBrewPostStory.args = {
  post: {
    post_id: 102295358,
    author: "benny.blockchain",
    permlink: "sup-schaly",
    category: "hive-152197",
    title: "Sup schaly",
    body: "Boozin with the boys. I need a geeb. - Scha-muhfickin-ly",
    json_metadata: {
      tags: ["hive-152197", "coldbrew-app"],
      app: "hiveblog/0.1",
      format: "markdown",
    },
    created: "2021-03-10T23:38:15",
    updated: "2021-03-10T23:38:15",
    depth: 0,
    children: 0,
    net_rshares: 0,
    is_paidout: true,
    payout_at: "2021-03-17T23:38:15",
    payout: 0,
    pending_payout_value: "0.000 HBD",
    author_payout_value: "0.000 HBD",
    curator_payout_value: "0.000 HBD",
    promoted: "0.000 HBD",
    replies: [],
    author_reputation: 33.03,
    stats: {
      hide: false,
      gray: false,
      total_votes: 1,
      flag_weight: 0,
    },
    url: "/hive-152197/@benny.blockchain/sup-schaly",
    beneficiaries: [
      {
        account: "hiveonboard",
        weight: 100,
      },
      {
        account: "oracle-d",
        weight: 100,
      },
      {
        account: "peakd",
        weight: 300,
      },
    ],
    max_accepted_payout: "1000000.000 HBD",
    percent_hbd: 10000,
    active_votes: [
      {
        rshares: 0,
        voter: "coldbrewbeta",
      },
    ],
    blacklists: [],
    community: "hive-152197",
    community_title: "cold brew",
    author_role: "admin",
    author_title: "₿enny ₿lockchain",
  },
};
