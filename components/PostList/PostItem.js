import React from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import PostDate from "./PostDate";
import FirstParagraph from "./FirstParagraph";
import { hrefResolver, linkResolver } from "../../prismic-configuration";
import styled from "styled-components";

const BlogPost = styled.div`
  margin: 2rem;
`;

const BlogTitle = styled.h2`
  font-family: "FiraSans";
  font-weight: 500;
  list-style-type: none;

  a {
    color: ${(props) => props.theme.text.primary};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    cursor: pointer;

    display: inline-block;
    position: relative;
  }

  a:after {
    color: ${(props) => props.theme.text.secondary};
    cursor: pointer;
    text-decoration: underline;
  }
  a:hover {
    color: ${(props) => props.theme.text.primary};
    cursor: pointer;
    text-decoration: underline;
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
      <Link as={linkResolver(post)} href={hrefResolver(post)}>
        <BlogTitle>
          <a>{title}</a>
        </BlogTitle>
      </Link>
      <PostDate date={post.data.date} />
      <FirstParagraph sliceZone={post.data.body1} textLimit={300} />
    </BlogPost>
  );
};

export default PostItem;
