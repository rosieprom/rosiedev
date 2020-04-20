import React from "react";
import { Date } from "prismic-reactjs";
import styled from "styled-components";

const BlogPostTime = styled.p`
  color: ${(props) => props.theme.text.primary};
  font-family: "FiraSans";
  font-size: 1rem;
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

  return <BlogPostTime>{displayDate}</BlogPostTime>;
};

export default PostDate;
