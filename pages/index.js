import Layout from "../components/layout";
import Header from "../components/header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 5rem;
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;
`;

const ShortBioText = styled.h3`
  font-weight: 400;
  text-align: left;
  font-family: "Montserrat";
  padding-left: 2rem;
`;

const AboutText = styled.p`
  text-align: left;
  font-family: "FiraSans";
  padding-left: 2rem;
`;

const Home = ({}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Title>Rosalie Prom</Title>
        <ShortBioText>
          Front-End Engineer @ CommBank Innovation Labs | UI/UX | Blockchain |
          Code Like a Girl AU | Playmakers UTS | #100DaysOfCode{" "}
        </ShortBioText>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </AboutText>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </AboutText>
      </Container>
    </Layout>
  );
};

export default Home;
