import React from "react";

import CommunityCard from "../components/CommunityCard";

export default {
  title: "Community Card",
  component: CommunityCard,
};

const Template = (args) => <CommunityCard {...args} />;

export const Leo = Template.bind({});
Leo.args = {
  name: "hive-167922",
  title: "LeoFinance",
  about:
    "LeoFinance is a community for crypto & finance. Powered by Hive and the LEO token economy.",
  avatar_url: "https://images.hive.blog/u/benny.blockchain/avatar",
  index: "1",
};

const leo = {
  id: 1341662,
  name: "hive-167922",
  title: "LeoFinance",
  about:
    "LeoFinance is a community for crypto & finance. Powered by Hive and the LEO token economy.",
  lang: "en",
  type_id: 1,
  is_nsfw: false,
  subscribers: 4764,
  created_at: "2019-11-26 17:25:27",
  sum_pending: 14075,
  num_pending: 17833,
  num_authors: 1527,
  avatar_url: "",
  description:
    "Using our Hive-based token (LEO) we reward content creators and users for engaging on our platform at https://leofinance.io and within our community on the Hive blockchain. \n\nBlogging is just the beginning of what's possible in the LeoFinance community and with the LEO token:\n\n1). Trade LEO and other Hive-based tokens on our exchange: https://leodex.io\n\n2). Track your Hive account statistics at https://hivestats.io\n\n3). Opt-in to ads on LEO Apps which drives value back into the LEO token economy from ad buybacks.\n\n4). Learn & contribute to our crypto-educational resource at https://leopedia.io\n\n5). Wrap LEO onto the Ethereum blockchain with our cross-chain token bridge: https://wleo.io (coming soon)\n\nLearn more about us at https://leopedia.io/faq",
  flag_text:
    "Content should be related to the financial space (i.e. crypto, equities, etc. etc.)\nPosts created from our interface (https://leofinance.io) are eligible for upvotes from @leo.voter and will automatically be posted to our Hive community, our front end and other Hive front ends as well\nPosts in our community are also eligible to earn our native token (LEO) in conjunction with HIVE post rewards\nIf you have any questions or need help with anything, feel free to reach out to us on twitter (@financeleo) or head over to our discord server (https://discord.gg/KgcVDKQ)",
  settings: {},
  context: {
    role: "guest",
    subscribed: true,
    title: "",
  },
  team: [
    ["hive-167922", "owner", ""],
    ["khaleelkazi", "admin", ""],
    ["leofinance", "mod", ""],
    ["leo.voter", "mod", ""],
    ["steem.leo", "mod", ""],
    ["gerber", "mod", ""],
  ],
};
