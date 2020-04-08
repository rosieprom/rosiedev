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

  @media (max-width: 800px) {
    padding: 0rem;
  }
`;

const ShortBioText = styled.h3`
  font-weight: 400;
  text-align: left;
  font-family: "Montserrat";
  padding-left: 2rem;

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
          Front-End Engineer @ CommBank Innovation Labs | UI/UX | Blockchain |
          Code Like a Girl AU | Playmakers UTS | #100DaysOfCode
        </ShortBioText>
        <AboutText>
          I'm a Junior Front-End Developer at CommBank. I work with: React,
          Typescript, CSS, Accessibility, UX Research, Blockchain and UI Design.
          I'm continuing to learn and train myself new and different things by
          doing the #100DaysOfCode challenge! You can follow my progress on my
          Github or Instagram.
        </AboutText>
        <AboutText>
          I'm also a university graduate who studied Information Technology at
          the University of Technology, Sydney. As a student, I have also been a
          leader of student societies and an active member of Women in
          Engineering and IT. I have organised a hackathon in the past with
          ProgSoc and a games jam with UTS Playmakers.
        </AboutText>
        <AboutText>
          I aspire to become a Full Stack Developer or a Solutions Architect or
          a Blockchain enthusiast of some kind. I'm passionate about current
          trends in technology, community and education. I volunteer some of my
          spare time helping local communities thrive. I'm also a gamer. I enjoy
          being active, going to the gym regularly and eating healthy!
        </AboutText>
      </Container>
    </Layout>
  );
};

export default Home;
