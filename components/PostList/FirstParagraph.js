import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const ShortText = styled.p`
  font-weight: 300;
  text-align: left;
  font-family: "FiraSans";
`;

/**
 * Component that returns the first paragraph of a post
 */
const FirstParagraph = ({ sliceZone, textLimit = 300 }) => {
  // Find the first text slice of post's body
  const firstTextSlice = sliceZone.find((slice) => slice.slice_type === "text");

  if (firstTextSlice) {
    const text = RichText.asText(firstTextSlice.primary.text);
    let limitedText = text.substring(0, textLimit);

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      limitedText = `${limitedText.substring(
        0,
        limitedText.lastIndexOf(" ")
      )}...`;
    }

    return <ShortText>{limitedText}</ShortText>;
  }

  // If there are no slices of type 'text', return nothing
  return null;
};

export default FirstParagraph;