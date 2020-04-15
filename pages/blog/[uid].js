import { RichText } from "prismic-reactjs";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { Client } from "../../utils/prismicHelpers";

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 5rem;

  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;

const Post = ({ post }) => {
  if (post) {
    const titled = RichText.asText(post.data.blogtitle).length !== 0;
    const title = titled ? RichText.asText(post.data.blogtitle) : "Untitled";

    return (
      <Layout>
        <Header />
        <Container>
          <Title>{title}</Title>
          <p>{post.data.text}</p>
        </Container>
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
    const document = await Client(req).getByUID("blog", uid);

    return {
      post: document,
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Post;
