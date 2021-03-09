import useFollowingFeed from "../../hooks/useFollowingFeed";
import Post from "../Post";
import styng from "../../public/posts-tmp/avatar-black.png";

const Feed = () => {
  const [{ feed, loading, error }] = useFollowingFeed(
    "feed",
    "benny.blockchain",
    "10"
  );

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {feed &&
        feed.map((post) => {
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
