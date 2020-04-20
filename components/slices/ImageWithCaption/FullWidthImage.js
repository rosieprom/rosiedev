import React from "react";
import Caption from "./Caption";
import styled from "styled-components";

const LargeContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

/**
 * Full width image component
 */
const FullWidthImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url;
  const caption = slice.primary.caption;

  return (
    <LargeContainer style={{ backgroundImage: `url(${imageUrl})` }}>
      <Caption caption={caption} />
    </LargeContainer>
  );
};

export default FullWidthImage;
