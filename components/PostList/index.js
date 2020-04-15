import React from "react";
import PostItem from "./PostItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 5rem;

  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;
/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostItem post={post} key={post.uid} />
      ))}
    </Container>
  );
};

export default PostList;
