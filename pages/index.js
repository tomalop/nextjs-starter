import Posts from "../data/posts";
import PostsListViewer from "../components/mainPage/PostsListViewer";

const Home = () => (
  <div className="home">
    <PostsListViewer posts={Posts} />
  </div>
);

export default Home;
