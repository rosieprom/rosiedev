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
          <meta charset="utf-8" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Rosalie Prom | Front-End Developer"
          />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <meta property="og:image" content="" />

          {/* Twitter meta tags */}
          <meta
            name="twitter:card"
            content="Rosalie Prom | Front-End Developer"
          />
          <meta name="twitter:site" content="@rosalie_dev" />
          <meta name="twitter:title" content="Rosalie Prom" />
          <meta
            name="twitter:description"
            content="Sydney based React developer."
          />

          {/* Facebook meta tags */}
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Rosalie Prom | Front-End Developer"
          />
          <meta property="og:site_name" content="RosalieProm" />
          <meta property="og:url" content="https://www.rosalie.dev" />
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
