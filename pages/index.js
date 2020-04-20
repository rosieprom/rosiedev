import Layout from "../components/layout";
import Header from "../components/header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 5rem 0;

  @media (min-width: 800px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;
  font-size: 2rem;

  @media (max-width: 800px) {
    padding: 0rem;
  }
`;

const ShortBioText = styled.h3`
  font-weight: 400;
  text-align: left;
  font-family: "Montserrat";
  padding-left: 2rem;
  font-size: 1.5rem;

  @media (min-width: 800px) {
    margin-right: 20rem;
  }

  @media (max-width: 800px) {
    padding: 0rem;
  }
`;

const AboutText = styled.p`
  text-align: left;
  font-family: "FiraSans";
  padding-left: 2rem;
  font-size: 1.2rem;

  @media (min-width: 800px) {
    margin-right: 20rem;
  }

  @media (max-width: 800px) {
    padding: 0rem;
  }
`;

const Home = ({}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Title>Rosalie Prom</Title>
        <ShortBioText>
          Front-End Engineer @ Commonwealth Bank Innovation Labs | UI/UX |
          Blockchain | Code Like a Girl AU | #100DaysOfCode
        </ShortBioText>
        <AboutText>
          I'm a Junior Front-End Developer at CommBank. I work with: React,
          Typescript, CSS, UX Research, Blockchain and UI Design. I'm continuing
          to learn and train myself new and different things by doing the
          #100DaysOfCode challenge! You can follow my progress on my Github or
          Instagram.
        </AboutText>
        <AboutText>I'm currently not available for freelance work.</AboutText>
      </Container>
    </Layout>
  );
};

export default Home;
