import Link from "next/link";

const PostsListPost = ({ post }) => {
  return (
    <div>
      <p>{post.title}</p>
      <Link href={`/posts/${encodeURIComponent(post.id)}`}>
        <a>{post.title}</a>
      </Link>
    </div>
  );
};

export default PostsListPost;
