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

const Volunteering = ({}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Title>Volunteering</Title>
        <ShortText>
          I'm extremely passionate about serving the community in Sydney.
        </ShortText>
        <Cards
          items={[
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
            }
          ]}
        />
      </Container>
    </Layout>
  );
};

export default Volunteering;
