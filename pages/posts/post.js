import Posts from "../../data/posts";
import ReactMarkdown from 'react-markdown'

const Post = ({ post }) => (
  <div className="home">
    <h1>{post.title}</h1>
    <ReactMarkdown># Hello, *world*!</ReactMarkdown>
  </div>
);

export const getStaticPaths = () => {
  // Get the paths we want to pre-render based on posts
  const paths = Posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = ({ params }) => {
  const post = Posts.findOne((p) => p.id === params.id);
  return { props: { post } };
};

export default Post;
