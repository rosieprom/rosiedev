import { RichText } from "prismic-reactjs";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styled from "styled-components";
import PostDate from "../../components/PostList/PostDate";
import SliceZone from "../../components/SliceZone";
import { Client } from "../../utils/prismicHelpers";
import Link from "next/link";

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
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
  cursor: pointer;

  a {
    color: ${(props) => props.theme.text.primary};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    cursor: pointer;

    display: inline-block;
    position: relative;
  }

  a:after {
    color: ${(props) => props.theme.text.secondary};
    cursor: pointer;
    text-decoration: underline;
  }
  a:hover {
    color: ${(props) => props.theme.text.primary};
    cursor: pointer;
    text-decoration: underline;
  }
`;

const HeaderContainer = styled.div`
  padding: 2rem;
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
            <BackLink>
              <a>← back to blogs</a>
            </BackLink>
          </Link>
          <HeaderContainer>
            <Title>{title}</Title>
            <PostDate date={post.data.date} />
          </HeaderContainer>

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
