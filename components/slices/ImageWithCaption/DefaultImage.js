import React from "react";
import Caption from "./Caption";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.img`
  display: inline-block;
  width: 90%;
  height: 20%;
  margin: 2rem;
`;

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
  const imageUrl = slice.primary.image_banner.url;
  const imageAlt = slice.primary.image_banner.alt;
  // const caption = slice.primary.caption;

  return (
    <Container>
      <ImageContainer src={imageUrl} alt={imageAlt} />
      {/* <Caption caption={caption} /> */}
    </Container>
  );
};

export default DefaultImage;
