import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import { Client } from "../utils/prismicHelpers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 5rem 3rem;

  @media (max-width: 800px) {
    padding: 0.5rem;
    margin: 2rem 0.5rem;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  font-size: 3rem;

  @media (max-width: 800px) {
    margin-top: 5rem;
    font-size: 2rem;
  }
`;

const ShortText = styled.h3`
  font-weight: 300;
  text-align: left;
  font-family: "Montserrat";
`;

const Volunteering = ({ doc, posts }) => {
  return (
    <Layout>
      <Header />
      {doc && (
        <Container>
          <Title>Volunteering</Title>
          <ShortText>
            I'm extremely passionate about serving the community in Sydney. Here
            are some of the highlights of my volunteering career.
          </ShortText>
          <Cards posts={posts} />
        </Container>
      )}
      <Footer />
    </Layout>
  );
};

Volunteering.getInitialProps = async function ({ req }) {
  try {
    const doc = await Client(req).getSingle("volunteering");

    const posts = await Client(req).query(
      Prismic.Predicates.at("document.type", "volunteering")
    );
    return {
      doc,
      posts: posts ? posts.results : [],
    };
  } catch (error) {
    return error;
  }
};
export default Volunteering;
