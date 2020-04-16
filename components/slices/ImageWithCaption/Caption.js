import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const ImageLabel = styled.p`
  font-style: italic;
  font-size: 1rem;
  font-family: "FiraSans";
`;

const Caption = ({ caption }) => {
  if (RichText.asText(caption) !== "") {
    return <ImageLabel>{RichText.asText(caption)}</ImageLabel>;
  }

  return null;
};

export default Caption;
