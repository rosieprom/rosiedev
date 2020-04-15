import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import styled from "styled-components";

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

const Projects = ({}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Title>Projects</Title>
        <ShortText>Some of the projects I've worked on in the past.</ShortText>
        <Cards
          items={[
            {
              src: "/trianglesoflight.jpg",
              alt: "Triangle of Lights",
              title: "Triangle of Lights",
              shortDescription:
                "Arduino physical prototype to reflect touch and light feedback. This project was made for the UTS FEIT BUILD Program",
              linkName: "Github",
              url: "https://github.com/developerpeachy/TrianglesOfLight",
              linkNameTwo: "Instagram",
              urlTwo: "https://www.instagram.com/p/Bz0WP_Og_A9/",
            },
            {
              src: "/alphawallet_website.png",
              alt: "AlphaWallet.com",
              title: "AlphaWallet",
              shortDescription:
                "AlphaWallet's website was made with React, TailwindCSS and hosted off Github and Netlify.",
              linkName: "Website",
              url: "https://alphawallet.com/",
            },
            {
              src: "/ethviewer.JPG",
              alt: "ETHViewer XR",
              title: "ETHViewer - Interactive Design",
              shortDescription:
                "Did a DataVis project to demonstrate how Ethereum mining works in Blockchain on a low-level. I used Unity C#, EPICentre UNSW and VR Equipment.",
              linkName: "Ethviewer",
              url: "http://ethviewer.live/",
              linkNameTwo: "Epicenter",
              urlTwo: "http://epicentre.matters.today/",
            },
          ]}
        />
      </Container>
      <Footer />
    </Layout>
  );
};

export default Projects;
