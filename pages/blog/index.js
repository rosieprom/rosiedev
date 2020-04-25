import Prismic from "prismic-javascript";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import PostList from "../../components/PostList";
import { Client } from "../../utils/prismicHelpers";
import styled from "styled-components";

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  font-size: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 3rem;

  @media (max-width: 800px) {
    padding: 0.5rem;
    margin: 2rem 0.5rem;
  }
`;

const ShortText = styled.h3`
  font-weight: 300;
  text-align: left;
  font-family: "Montserrat";
`;

const Blog = ({ doc, posts }) => {
  if (doc) {
    return (
      <Layout>
        <Header />
        <Container>
          <Title>Blogs</Title>
          <ShortText>
            I don't usually write blogs, but when I do I hope you would find
            them interesting.
          </ShortText>
          <PostList posts={posts} />
        </Container>
        <Footer />
      </Layout>
    );
  }
};

/**
 * Query the homepage document and blog posts from Prismic when the page is loaded
 */
Blog.getInitialProps = async function ({ req }) {
  try {
    const doc = await Client(req).getSingle("blog");

    const posts = await Client(req).query(
      Prismic.Predicates.at("document.type", "blog"),
      { orderings: "[my.blog.date desc]" }
    );
    //console.log(JSON.stringify(posts));
    return {
      doc,
      posts: posts ? posts.results : [],
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Blog;
