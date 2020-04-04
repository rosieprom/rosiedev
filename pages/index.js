import Layout from "../components/layout";
import Header from "../components/header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "FiraSans";
`;

const AboutText = styled.p`
  font-weight: 400;
  text-align: center;
  font-family: "Montserrat";
`;

const Home = ({}) => {
  return (
    <Layout>
      <Header />
      <Title>Rosalie Prom</Title>
      <Container>
        <AboutText>
          A Junior Software Engineer with a passion for UX/UI design,
          blockchain, emerging technologies and creative coding. Based in
          Sydney. Community building, weightlifting and food enthusiast.
        </AboutText>
      </Container>
    </Layout>
  );
};

export default Home;
