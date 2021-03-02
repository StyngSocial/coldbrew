import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import hive from "@hiveio/hive-js";
import Tweet from "../../components/Tweet/Tweet";
import bbc from "../../public/images/bennyblockchain.jpg";

const Community = (props) => {
  const router = useRouter();
  console.log(props);
  const tag = router.query.tag;
  const [community, setCommunity] = useState([]);

  const params = {
    limit: "20",
    tag: tag,
  };
  useEffect(() => {
    console.log("useeffect");
    hive.api.getDiscussionsByTrending(params, function (err, result) {
      setCommunity(result);
    });
  }, []);

  return (
    <>
      {community.map((post) => {
        return (
          <Tweet
            key={post.post_id}
            name={post.author}
            username={post.author}
            avatar={bbc}
            tweet={post.body}
          />
        );
      })}
    </>
  );
};
export default Community;
