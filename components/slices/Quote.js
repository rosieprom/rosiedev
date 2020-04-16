import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const BlockQuotation = styled.div`
  margin: 2rem;
  display: inline-block;
  font-style: italic;
  font-size: 1rem;
  font-family: "FiraSans";

  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
    margin: 0.5rem 0;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    display: block;
    margin: 0;
    padding: 0;
  }
`;

const BlockCitation = styled.p`
  display: flex;
  text-align: right;
  font-style: italic;
  font-family: "Montserrat";

  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }
`;

const CustomDiv = styled.div`
  text-align: center;
  display: inline-block;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ImageContainer = styled.img`
  border-radius: 50%;
  height: 10rem;
`;

/**
 * Quote slice component
 */
const Quote = ({ slice }) => (
  <Container>
    <CustomDiv>
      <ImageContainer
        src={slice.primary.portrait_author.url}
        alt={slice.primary.portrait_author.alt}
      />
    </CustomDiv>

    <BlockQuotation>
      {RichText.asText(slice.primary.quote)}
      <BlockCitation>
        {RichText.asText(slice.primary.name_of_the_author)}
      </BlockCitation>
    </BlockQuotation>
  </Container>
);

export default Quote;
