import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

// Project components & functions
import Header from "../../components/Header";
import Footer from "../../components/footer";
import Layout from "../../components/Layout";
import { Client } from "../../utils/prismicHelpers";

/**
 * Homepage component
 */
const Home = ({ doc, posts }) => {
  if (doc) {
    return (
      <Layout>
        <Header />
        <p> {posts} </p>
        <Footer />
      </Layout>
    );
  }
};

/**
 * Query the homepage document and blog posts from Prismic when the page is loaded
 */
Home.getInitialProps = async function ({ req }) {
  try {
    // Retrieve the homepage document
    const doc = await Client(req).getSingle("blog");

    // Retrieve the blog posts organized in descending chronological order
    const posts = await Client(req).query(
      Prismic.Predicates.at("document.type", "post"),
      { orderings: "[my.post.date desc]" }
    );

    return {
      doc,
      posts: posts ? posts.results : [],
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Home;
