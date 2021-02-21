import Posts from "../data/posts";
import PostsListViewer from "../components/mainPage/PostsListViewer";

const Home = ({ posts }) => (
  <div className="home">
    <PostsListViewer posts={posts} />
  </div>
);

export const getStaticProps = () => {
  console.log(JSON.stringify(Posts));
  return { props: { Posts } };
};

export default Home;
