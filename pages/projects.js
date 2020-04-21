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
  margin-top: 5rem;

  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;
`;

const ShortText = styled.h3`
  font-weight: 300;
  text-align: left;
  font-family: "Montserrat";
  padding-left: 2rem;
`;

const Projects = ({ doc, posts }) => {
  return (
    <Layout>
      <Header />
      {doc && (
        <Container>
          <Title>Projects</Title>
          <ShortText>
            Some of the projects I've worked on in the past.
          </ShortText>
          <Cards posts={posts} />
        </Container>
      )}
      <Footer />
    </Layout>
  );
};

Projects.getInitialProps = async function ({ req }) {
  try {
    const doc = await Client(req).getSingle("work");

    const posts = await Client(req).query(
      Prismic.Predicates.at("document.type", "work")
    );
    return {
      doc,
      posts: posts ? posts.results : [],
    };
  } catch (error) {
    return error;
  }
};

export default Projects;
