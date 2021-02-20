import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default Home;
