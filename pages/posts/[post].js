import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import posts from "../../data/posts";

const Post = () => {
  const router = useRouter();
  const post = posts.find(post => post.id.toString() === router.query.post)
  return (
    <div className="home">
      <h1>{post.title}</h1>
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
    </div>
  );
};

export default Post;
