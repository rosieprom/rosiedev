import { RichText } from "prismic-reactjs";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Post = ({ post }) => {
  if (post) {
    const titled = RichText.asText(post.data.title).length !== 0;
    const title = titled ? RichText.asText(post.data.title) : "Untitled";

    return (
      <Layout>
        <Header />
        <h1>{title}</h1>
        <p>{post.data.body}</p>
        <Footer />
      </Layout>
    );
  }

  // Call the standard error page if the document was not found
  return <Error statusCode="404" />;
};

/**
 * Query the post document from Prismic when the page is loaded
 */
Post.getInitialProps = async function ({ req, query }) {
  try {
    const { uid } = query;
    const document = await Client(req).getByUID("post", uid);

    return {
      post: document,
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Post;
