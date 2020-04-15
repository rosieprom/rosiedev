import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  max-width: 700px;
  margin: auto;
`;

const BlogAvatar = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin: 1em auto;
`;

const BlogDescription = styled.p`
  font-size: 18px;
  color: #9a9a9a;
  line-height: 30px;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  font-family: "Lato", sans-serif;
  border-bottom: 1px solid #dadada;
`;

const BlogTitle = styled.h1`
  font-family: ("Montserrat");
`;

/**
 * Homepage header component
 */
const HomepageHeader = ({ image, headline, description }) => {
  return (
    <Container>
      <blogAvatar style={{ backgroundImage: `url(${image.url})` }} />
      <BlogTitle>{RichText.asText(headline)}</BlogTitle>
      <BlogDescription>{RichText.asText(description)}</BlogDescription>
    </Container>
  );
};

export default HomepageHeader;
