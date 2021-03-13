import Post from "../Post";
import styng from "../../public/posts-tmp/avatar-black.png";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
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
