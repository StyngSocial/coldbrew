import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.post_id} post={post} />;
      })}
    </>
  );
};

export default Feed;
