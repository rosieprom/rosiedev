import styled from "styled-components";

const Card = styled.div`
  padding: 1rem;
  margin: 2rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;

  @media (max-width: 700px) {
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
  padding: 2rem;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;

  @media (max-width: 700px) {
    padding: 0rem;
  }
`;

const ShortDescription = styled.h4`
  text-align: left;
  font-family: "Montserrat";
  padding-left: 2rem;

  @media (max-width: 700px) {
    padding: 0rem;
  }
`;

const CardFooter = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
`;

const CustomButton = styled.button`
  background-color: ${props => props.theme.bg.secondary};
  border: 1px solid ${props => props.theme.text.primary};
  color: ${props => props.theme.text.primary};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  margin: 0.5rem;

  &:hover {
    background-color: ${props => props.theme.text.primary};
    color: ${props => props.theme.bg.secondary};
  }
`;

const BlankLink = styled.a`
  text-decoration: none;
`;

const Text = styled.span`
  font: 1.2em "Fira Sans", sans-serif;
`;

function Cards(props) {
  return (
    <>
      {props.items.map((item, index) => (
        <Card key={index}>
          <ImgContainer>
            <Img src={item.src} alt={item.alt} />
          </ImgContainer>

          <Content>
            <Title>{item.title}</Title>
            <ShortDescription>{item.shortDescription}</ShortDescription>
            <CardFooter>
              {item.url ? (
                <BlankLink
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>{item.linkName}</Text>
                  </CustomButton>
                </BlankLink>
              ) : null}

              {item.urlTwo ? (
                <BlankLink
                  href={item.urlTwo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>{item.linkNameTwo}</Text>
                  </CustomButton>
                </BlankLink>
              ) : null}
            </CardFooter>
          </Content>
        </Card>
      ))}
    </>
  );
}

export default Cards;
