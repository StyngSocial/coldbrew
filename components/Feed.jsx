import ColdBrewPost from "./ColdBrewPost/";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <ColdBrewPost key={post.post_id} post={post} />;
      })}
    </>
  );
};

export default Feed;
