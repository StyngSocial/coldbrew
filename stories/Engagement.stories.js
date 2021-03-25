import React from "react";

import Engagement from "../components/Engagement";

export default {
  title: "Engagement Bar",
  component: Engagement,
};

const Template = (args) => <Engagement {...args} />;

export const EngagementBar = Template.bind({});
EngagementBar.args = { votes: "100", payout: "$100", comments: 3, reblogs: 6 };
