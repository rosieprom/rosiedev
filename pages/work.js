import Layout from "../components/layout";
import Header from "../components/header";
import Cards from "../components/cards";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 5rem;

  @media (max-width: 700px) {
    padding: 1rem;
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

const Work = ({}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Title>Achievements, Projects and Work.</Title>
        <ShortText>
          A little bit of volunteering, community work, projects and random
          accomplishments I did.
        </ShortText>
        <Cards
          items={[
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "Triangle of Lights",
              title: "Triangle of Lights",
              shortDescription:
                "Arduino physical prototype to reflect touch and light feedback. This project was made for the UTS FEIT BUILD Program",
              linkName: "Github",
              url: "https://github.com/developerpeachy/TrianglesOfLight",
              linkNameTwo: "Instagram",
              urlTwo: "https://www.instagram.com/p/Bz0WP_Og_A9/"
            },
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "YBF Student Leader of the Year",
              title: "YBF Ventures Student Leader of the Year 2019.",
              shortDescription:
                "I was nominated and won Student Leader of the Year as a part of YBF Ventures' Lift Off Awards.",
              linkName: "Medium",
              url:
                "https://medium.com/@ybfventures.ad/winners-announced-for-australias-second-annual-fintech-diversity-awards-the-2019-lift-off-awards-42abe8e4c0bd",
              linkNameTwo: "LinkedIn",
              urlTwo:
                "https://www.linkedin.com/embed/feed/update/urn:li:share:6605002335485853696"
            },
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "AlphaWallet.com",
              title: "AlphaWallet",
              shortDescription:
                "AlphaWallet's website was made with React, TailwindCSS and hosted off Github and Netlify.",
              linkName: "Website",
              url: "https://alphawallet.com/"
            },
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "SIGGRAPH Asia Student Volunteer",
              title: "SIGGRAPH Asia SV 2019",
              shortDescription:
                "SIGGRAPH is the biggest Computer Animation and Interactive Techniques Conference in the world and it FINALLY came to Australia!",
              linkName: "LinkedIn",
              url:
                "https://www.linkedin.com/embed/feed/update/urn:li:share:6602996100746092545"
            },
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "UTS WiEIT STEM",
              title: "UTS Pilot STEM Primary Program",
              shortDescription:
                "As a part of the UTS Outreach program, I volunteered and mentored STEM to some primary school students",
              linkName: "Video",
              url:
                "https://www.uts.edu.au/about/faculty-engineering-and-information-technology/women-engineering-and-it/primary-and-high-0-0",
              linkNameTwo: "Article",
              urlTwo:
                "https://www.uts.edu.au/partners-and-community/initiatives/social-justice-uts/social-impact-grants/news/building-stem"
            },
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "ProgSocUTS",
              title: "ProgSoc UTS Netlify Site",
              shortDescription:
                "As a part of the UTS Programmers' Society, I volunteered some time to reconstruct a home page as part of an ongoing community project.",
              linkName: "Website",
              url: "https://progsoc.netlify.com/"
            },
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "Portfolio Piece",
              title: "Final Portfolio - Interactive Design",
              shortDescription:
                "I graduated from UTS and compiled the best work I could in this PDF Presentation. Download and take a look!",
              linkName: "Presentation",
              url: "/static/Rosie_Design_Portfolio.pdf"
            },
            {
              src:
                "https://images.unsplash.com/photo-1585907122964-65ad93c5c566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
              alt: "ETHViewer XR",
              title: "ETHViewer - Interactive Design",
              shortDescription:
                "Did a DataVis project to demonstrate how Ethereum mining works in Blockchain on a low-level. I used Unity C#, EPICentre UNSW and VR Equipment.",
              linkName: "Ethviewer",
              url: "http://ethviewer.live/"
            }
          ]}
        />
      </Container>
    </Layout>
  );
};

export default Work;
