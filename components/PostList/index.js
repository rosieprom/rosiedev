import React from "react";
import PostItem from "./PostItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
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
