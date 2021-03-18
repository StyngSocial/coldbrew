import PostIntro from "./PostIntro";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <PostIntro key={post.post_id} post={post} />;
      })}
    </>
  );
};

export default Feed;
