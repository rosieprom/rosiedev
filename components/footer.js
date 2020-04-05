import styled from "styled-components";

const Container = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ByLine = styled.p`
  padding: 1rem;
  font-family: "FiraSans";
  font-weight: 500;
  list-style-type: none;

  a {
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
`;

const Footer = ({}) => {
  return (
    <Container>
      <ByLine>
        <a
          href="https://github.com/developerpeachy"
          target="_blank"
          className="font-bold no-underline hover:underline text-white hover:text-yellow-500"
        >
          built by developerpeachy
        </a>
      </ByLine>
    </Container>
  );
};

export default Footer;
