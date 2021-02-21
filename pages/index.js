import PostsListViewer from "../components/mainPage/PostsListViewer";
import storedPosts from "../data/posts";

const Home = ({posts}) => (
  <div className="home">
    <PostsListViewer posts={posts} />
  </div>
);

export async function getStaticProps() {
  // Pass post data to the page via props
  return { props: { posts: storedPosts } };
}

export default Home;
