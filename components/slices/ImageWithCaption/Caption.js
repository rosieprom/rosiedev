import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const ImageLabel = styled.p`
  font-style: italic;
  font-size: 1rem;
  font-family: "FiraSans";
`;

const Caption = ({ description }) => {
  if (RichText.asText(description) !== "") {
    return <ImageLabel>{RichText.asText(description)}</ImageLabel>;
  }

  return null;
};

export default Caption;
