// /pages/_document.js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/shared/Footer";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <Footer />
      </Html>
    );
  }
}
export default MyDocument;
