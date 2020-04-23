import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  align-self: center;
`;

const Image = styled.img`
  width: 90%;
`;

const ImageSlice = ({ sliceZone }) => {
  const img = sliceZone.find(
    (slice) => slice.slice_type === "banner_with_caption"
  );
  if (img) {
    const imageUrl = img.primary.image_banner.url;
    const imageAlt = img.primary.image_banner.alt;
    return (
      <Container>
        <Image src={imageUrl} alt={imageAlt} />
      </Container>
    );
  }
};

export default ImageSlice;
