import { RichText } from "prismic-reactjs";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import SliceZone from "../../components/SliceZone";
import { Client } from "../../utils/prismicHelpers";
import Link from "next/link";

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

const BackLink = styled.p`
  padding: 2rem;
  font-family: "FiraSans";
  font-weight: 500;
  list-style-type: none;

  a {
    color: ${(props) => props.theme.text.primary};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${(props) => props.theme.text.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
    color: ${(props) => props.theme.text.primary};
  }
`;

const Post = ({ post }) => {
  if (post) {
    const titled = RichText.asText(post.data.title).length !== 0;
    const title = titled ? RichText.asText(post.data.title) : "Untitled";

    return (
      <Layout>
        <Header />
        <Container>
          <Link href="/blog" as="/blog">
            <BackLink> ← back to blogs</BackLink>
          </Link>
          <Title>{title}</Title>
          <SliceZone sliceZone={post.data.body1} />
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
    //console.log(JSON.stringify(document));
    return {
      post: document,
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Post;
