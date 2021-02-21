import PostsListViewer from "../components/mainPage/PostsListViewer";
import Posts from "../data/posts";

const Home = () => (
  <div className="home">
    <PostsListViewer posts={Posts} />
  </div>
);

export default Home;
