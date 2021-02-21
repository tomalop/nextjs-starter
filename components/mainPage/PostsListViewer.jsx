import PostsListPost from "./PostsListPost";

const PostsListViewer = (props) => {
  return (
    <div className="home">
      {props.posts.map((post) => {
        return <PostsListPost post={post} />;
      })}
    </div>
  );
};

export default PostsListViewer;
