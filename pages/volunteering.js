import Layout from "../components/layout";
import Footer from "../components/footer";
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
      <Container>
        <Title>Volunteering</Title>
        <ShortText>
          I'm extremely passionate about serving the community in Sydney. Here
          are some of the highlights of my volunteering career.
        </ShortText>
        <Cards
          items={[
            {
              src: "/LiftOffDiversity.png",
              alt: "YBF Student Leader of the Year",
              title: "YBF Ventures Student Leader of the Year 2019.",
              shortDescription:
                "I was nominated and won Student Leader of the Year as a part of YBF Ventures' Lift Off Awards. You can read more about the YBF Ventures lift off awards in the medium article below.",
              linkName: "Medium",
              url:
                "https://medium.com/@ybfventures.ad/winners-announced-for-australias-second-annual-fintech-diversity-awards-the-2019-lift-off-awards-42abe8e4c0bd",
              linkNameTwo: "LinkedIn",
              urlTwo:
                "https://www.linkedin.com/embed/feed/update/urn:li:share:6605002335485853696"
            },

            {
              src: "/SIGGRAPHAsiaSV.jpg",
              alt: "SIGGRAPH Asia Student Volunteer",
              title: "SIGGRAPH Asia SV 2019",
              shortDescription:
                "SIGGRAPH is the biggest Computer Animation and Interactive Techniques Conference in the world and it FINALLY came to Australia! I was very lucky to be one of many Aussies volunteering at this SIGGRAPH conference. ",
              linkName: "LinkedIn",
              url:
                "https://www.linkedin.com/embed/feed/update/urn:li:share:6602996100746092545"
            },
            {
              src: "/UTSPilotSTEM.png",
              alt: "UTS WiEIT STEM",
              title: "UTS Pilot STEM Primary Program",
              shortDescription:
                "As a part of the UTS Outreach program, I volunteered to teach STEM to some primary school students. This program was pretty successful in inspiring and stimulating young students to get interested in pursuing Science or Engineering in the future. I am very fortunate to be a part of the program. As an engineer today, I felt like my soft skills (presenting and teaching) has been enhanced by being a part of WiEIT's multiple outreach programs. Read more and watch the video below to learn more about UTS's mission to diversify the tech industry.",
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
      <Footer />
    </Layout>
  );
};

export default Volunteering;
