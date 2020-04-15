import React from "react";
import { Date } from "prismic-reactjs";
import styled from "styled-components";

const BlogPostMeta = styled.p`
  color: #9a9a9a;
  font-family: "Lato", sans-serif;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
/**
 * Post list item date component
 */
const PostDate = ({ date }) => {
  // Format the date to M d, Y
  const dateFormat = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const displayDate = new Intl.DateTimeFormat("en-US", dateFormat).format(
    Date(date)
  );

  return (
    <BlogPostMeta>
      <time className="created-at">{displayDate}</time>
    </BlogPostMeta>
  );
};

export default PostDate;
