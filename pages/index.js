import Head from "next/head";
import Link from "next/link";
// import useHivesigner from "../components/hivesigner/useHivesigner";

// const post = {
//   post_id: 102295358,
//   author: "benny.blockchain",
//   permlink: "sup-schaly",
//   category: "hive-152197",
//   title: "Sup schaly",
//   body: "Boozin with the boys. I need a geeb. - Scha-muhfickin-ly",
//   json_metadata: {
//     tags: ["hive-152197", "coldbrew-app"],
//     app: "hiveblog/0.1",
//     format: "markdown",
//   },
//   created: "2021-03-10T23:38:15",
//   updated: "2021-03-10T23:38:15",
//   depth: 0,
//   children: 0,
//   net_rshares: 0,
//   is_paidout: true,
//   payout_at: "2021-03-17T23:38:15",
//   payout: 0,
//   pending_payout_value: "0.000 HBD",
//   author_payout_value: "0.000 HBD",
//   curator_payout_value: "0.000 HBD",
//   promoted: "0.000 HBD",
//   replies: [],
//   author_reputation: 33.03,
//   stats: {
//     hide: false,
//     gray: false,
//     total_votes: 1,
//     flag_weight: 0,
//   },
//   url: "/hive-152197/@benny.blockchain/sup-schaly",
//   beneficiaries: [
//     {
//       account: "hiveonboard",
//       weight: 100,
//     },
//     {
//       account: "oracle-d",
//       weight: 100,
//     },
//     {
//       account: "peakd",
//       weight: 300,
//     },
//   ],
//   max_accepted_payout: "1000000.000 HBD",
//   percent_hbd: 10000,
//   active_votes: [
//     {
//       rshares: 0,
//       voter: "coldbrewbeta",
//     },
//   ],
//   blacklists: [],
//   community: "hive-152197",
//   community_title: "cold brew",
//   author_role: "admin",
//   author_title: "₿enny ₿lockchain",
// };
// const author = {
//   image: "https://images.hive.blog/u/benny.blockchain/avatar",
//   name: "Benny Blockchain",
//   username: "benny.blockchian",
// };

export default function Work() {
  const auth = useHivesigner();
  const post = () => {
    const json_metadata = {
      tags: ["hive-152197", "coldbrew-dev"],
      app: "cold.brew",
      format: "markdown",
    };
    const metadata = JSON.stringify(json_metadata);
    comment(
      auth,
      "benny.blockchain",
      "sup-internet",
      "benny.blockchain",
      "post9",
      "In Cold Brew",
      "The first post on coldbrew.live!",
      metadata
    );
  };
  const login = () => {
    auth.client.login({ username: "benny.blockchain" });
  };

  const logout = () => {
    let params = new URL(location).searchParams;
    const token =
      params.get("access_token") || localStorage.getItem("sc_token");
    console.log(token);
    auth.client.removeAccessToken();
    console.log(auth.client);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={login}>Log in</button>
      <button onClick={logout}>Log out</button>
      <button onClick={post}>Post</button>
      <Link href="/">
        <h1>Work</h1>
      </Link>
    </>
  );
}
