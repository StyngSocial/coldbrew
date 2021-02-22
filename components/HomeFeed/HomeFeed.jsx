import { useState, useEffect } from "react";
//import styles from "./HomeFeed.module.scss";
import { getTrendingPosts } from "../../pages/api/hive/bridge";
import Tweet from "../Tweet/Tweet";
import pio from "../../public/images/pio.jpeg";
import bbc from "../../public/images/bennyblockchain.jpg";
import styng from "../../public/tweets/avatar black.png";

const Feed = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  const getTrending = async () => {
    const posts = await getTrendingPosts();
    setTrendingPosts(posts);
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      <Tweet
        name="Department of Denfense"
        username="DoD"
        avatar={styng}
        tweet="Local horny man spotted in Alliance, OH. Last seen wearing a band aid on his swipe thumb. SEEK SHELTER"
        media={pio}
      />
      {trendingPosts.map((post) => {
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

export default Feed;
