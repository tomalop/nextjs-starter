import PostsListPost from "./PostsListPost";

const PostsListViewer = ({ posts }) => {
  return (
    <div className="home">
      {posts.map((post) => {
        <PostsListPost post={post} />;
      })}
    </div>
  );
};

export default PostsListViewer;
