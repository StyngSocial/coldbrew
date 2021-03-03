import { useTrending } from "@bennyblockchain/barista/dist/barista";
import Post from "../Post/Post";
import styng from "../../public/tweets/avatar-black.png";

const Feed = () => {
  const [{ trending, loading, error }] = useTrending("coldbrew-app");

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {trending &&
        trending.map((post) => {
          return (
            <Post
              key={post.post_id}
              name={post.author}
              username={post.author}
              avatar={styng}
              title={post.title}
              body={post.body}
            />
          );
        })}
    </>
  );
};

export default Feed;
