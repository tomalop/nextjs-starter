import Link from "next/link";

const PostsListPost = (props) => {
  return (
    <div key={props.post.id}>
      <p>{props.post.title}</p>
      <Link href={`/posts/${encodeURIComponent(props.post.id)}`}>
        <a>{props.post.title}</a>
      </Link>
    </div>
  );
};

export default PostsListPost;
