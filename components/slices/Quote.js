import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const BlockQuotation = styled.div`
  margin-bottom: 2rem;
  display: inline-block;
  font-style: italic;
  font-size: 24px;
  font-family: "FiraSans";

  &:before {
    content: "« ";
  }

  &:after {
    content: " »";
  }
`;

const PostPartSingle = styled.div`
  @media screen and (min-width: 920px) {
    .post-part.single .block-quotation,
    .blog-main.single .block-quotation {
      width: 130%;
      margin: 0 -15% 2rem -15%;
      font-size: 30px;
      padding: 0;
    }
  }
`;

const BlockCitation = styled.p`
  display: inline-block;
  font-style: italic;
  font-family: "FiraSans";
  border-left: solid #b4b4b4 4px;
  padding-left: 10px;
`;

/**
 * Quote slice component
 */
const Quote = ({ slice }) => (
  <PostPartSingle>
    <BlockQuotation>{RichText.asText(slice.primary.quote)}</BlockQuotation>
    <BlockCitation>
      {RichText.asText(slice.primary.name_of_the_author)}
    </BlockCitation>
  </PostPartSingle>
);

export default Quote;
