import React from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import PostDate from "./PostDate";
import FirstParagraph from "./FirstParagraph";
import ImageSlice from "./ImageSlice";
import { hrefResolver, linkResolver } from "../../prismic-configuration";
import styled from "styled-components";

const BlogPost = styled.div`
  display: flex;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1094px) {
    display: block;
    margin: 0;
  }
`;

const Content = styled.div`
  flex: 1.5;
  padding: 2rem;
  align-self: center;

  @media (max-width: 1094px) {
    padding: 1rem;
  }
`;

const Text = styled.span`
  font: 1rem "Fira Sans", sans-serif;
`;

const CardFooter = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;

  @media (max-width: 1094px) {
    justify-content: center;
  }
`;

const CustomButton = styled.button`
  background-color: ${(props) => props.theme.bg.primary};
  border: 1px solid ${(props) => props.theme.text.primary};
  color: ${(props) => props.theme.text.primary};
  padding: 0.5rem 2rem;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  margin: 0.5rem;

  &:hover {
    border: 1px solid ${(props) => props.theme.text.secondary};
    background-color: ${(props) => props.theme.text.secondary};
    color: ${(props) => props.theme.text.primary};
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";

  @media (max-width: 1094px) {
    padding: 0rem;
  }
`;

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title)
    ? RichText.asText(post.data.title)
    : "Untitled";

  return (
    <BlogPost>
      <ImageSlice sliceZone={post.data.body1} />
      <Content>
        <Title>{title}</Title>
        <PostDate date={post.data.date} />
        <FirstParagraph sliceZone={post.data.body1} textLimit={300} />
        <CardFooter>
          <Link as={linkResolver(post)} href={hrefResolver(post)}>
            <CustomButton href={hrefResolver(post)}>
              <Text>Read More</Text>
            </CustomButton>
          </Link>
        </CardFooter>
      </Content>
    </BlogPost>
  );
};

export default PostItem;
