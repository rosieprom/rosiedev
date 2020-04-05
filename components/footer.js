import styled from "styled-components";
import SocialBar from "../components/socialBar";

const Container = styled.div`
  display: block;
  padding: 0.5rem 1rem;
  justify-content: center;
  margin-bottom: auto;
`;

const Footer = ({}) => {
  return (
    <Container>
      <SocialBar />
    </Container>
  );
};

export default Footer;
