import React from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

import PostDate from "./PostDate";
import { hrefResolver, linkResolver } from "../../prismic-configuration";
import styled from "styled-components";

const BlogPost = styled.div`
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h2`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;
`;

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.blogtitle)
    ? RichText.asText(post.data.blogtitle)
    : "Untitled";

  return (
    <BlogPost>
      <Link as={linkResolver(post)} href={hrefResolver(post)}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <PostDate date={post.data.date} />
    </BlogPost>
  );
};

export default PostItem;
