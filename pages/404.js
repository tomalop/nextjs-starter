import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
};

export default Home;
