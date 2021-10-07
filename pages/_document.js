import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/sun-with-face_1f31e.png"
          />
          <link rel="apple-touch-icon" href="/favicon.ico" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Rosie Prom | Front-End Developer"
          />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <meta property="og:image" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
