import React from "react";
import Caption from "./Caption";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.img`
  width: 50%;
  height: 10%;
  margin: 2rem;

  @media (max-width: 1094px) {
    width: 90%;
    height: 10%;
    margin: 1rem;
  }
`;

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
  const imageUrl = slice.primary.image_banner.url;
  const imageAlt = slice.primary.image_banner.alt;
  const description = slice.primary.description;

  return (
    <Container>
      <ImageContainer src={imageUrl} alt={imageAlt} />
      <Caption description={description} />
    </Container>
  );
};

export default DefaultImage;
