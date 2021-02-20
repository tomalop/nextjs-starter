import "../styles/main.css";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Tomalop Blog</title>
        <link rel="icon" type="image/png" href="/websiteIcon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
