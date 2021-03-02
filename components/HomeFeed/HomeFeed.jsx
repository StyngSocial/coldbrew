import useTrending from "../../hooks/useTrending";
import Tweet from "../Tweet/Tweet";
import bbc from "../../public/images/bennyblockchain.jpg";

const Feed = () => {
  const [{ trending, loading, error }] = useTrending("coldbrew");

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {trending &&
        trending.map((post) => {
          return (
            <Tweet
              key={post.post_id}
              name={post.author}
              username={post.author}
              avatar={bbc}
              tweet={post.title}
            />
          );
        })}
    </>
  );
};

export default Feed;
