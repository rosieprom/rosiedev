import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import React from "react";

const Container = styled.div`
  @media (max-width: 1094px) {
    padding: 0.5rem;
  }
`;

const Card = styled.div`
  margin: 2rem 0rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1094px) {
    display: block;
    margin: 0;
  }
`;

const ImgContainer = styled.div`
  flex: 1.5;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  flex: 2;
  padding: 3rem;

  @media (max-width: 1094px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";

  @media (max-width: 1094px) {
    padding: 0rem;
  }
`;

const ShortDescription = styled.h4`
  text-align: left;
  font-family: "Montserrat";

  @media (max-width: 1094px) {
    padding: 0rem;
  }
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
  padding: 0.5rem 1rem;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  margin: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.text.primary};
    color: ${(props) => props.theme.bg.secondary};
  }
`;

const BlankLink = styled.a`
  text-decoration: none;
`;

const Text = styled.span`
  font: 1.2em "Fira Sans", sans-serif;
`;

const Cards = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Card key={post.uid}>
          <ImgContainer>
            <Img src={post.data.image.url} alt={post.data.image.alt} />
          </ImgContainer>

          <Content>
            {post.data.project && (
              <Title>{RichText.asText(post.data.project)}</Title>
            )}
            {post.data.volunteeringtitle && (
              <Title>{RichText.asText(post.data.volunteeringtitle)}</Title>
            )}

            <ShortDescription>
              {RichText.asText(post.data.about)}
            </ShortDescription>
            <CardFooter>
              {post.data.link.url && post.data.link_one_text && (
                <BlankLink
                  href={post.data.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton
                    href={post.data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>{RichText.asText(post.data.link_one_text)}</Text>
                  </CustomButton>
                </BlankLink>
              )}

              {post.data.link2.url && post.data.link_two_text && (
                <BlankLink
                  href={post.data.link2.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton
                    href={post.data.link2.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>{RichText.asText(post.data.link_two_text)}</Text>
                  </CustomButton>
                </BlankLink>
              )}
            </CardFooter>
          </Content>
        </Card>
      ))}
    </Container>
  );
};

export default Cards;
