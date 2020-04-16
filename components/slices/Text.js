import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { customLink } from "../../utils/prismicHelpers";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;

const ShortDescription = styled.p`
  text-align: left;
  font-family: "FiraSans";
  margin: 1rem 5rem;

  @media (max-width: 800px) {
    padding: 0rem;
    margin: 0.5rem;
  }
`;

const Text = ({ slice }) => (
  <Container>
    <ShortDescription>
      <RichText
        render={slice.primary.text}
        linkResolver={linkResolver}
        serializeHyperlink={customLink}
      />
    </ShortDescription>
  </Container>
);

export default Text;
