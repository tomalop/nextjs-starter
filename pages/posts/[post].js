import ReactMarkdown from "react-markdown";
import posts from "../../data/posts";

const Post = ({ post }) => {
  return (
    <div className="home">
      <h1>{post.title}</h1>
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { post: post.id.toString() },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const post = posts.find(
    (post) => post.id.toString() === params.post.toString()
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  const result = JSON.stringify(post).toString();

  // TODO: Add markdown to props

  // Pass post data to the page via props
  return { props: { post: result } };
}

export default Post;
