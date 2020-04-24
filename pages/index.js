import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 5rem 0;

  @media (min-width: 800px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;
  font-size: 5rem;

  @media (max-width: 800px) {
    padding: 1rem;
    font-size: 4rem;
  }

  @media (max-width: 425px) {
    padding: 0.5rem;
    font-size: 3rem;
  }

  background: -webkit-linear-gradient(
    120.6deg,
    rgba(123, 90, 224, 1) 11.2%,
    rgba(164, 46, 253, 1) 32.6%,
    rgba(213, 56, 234, 1) 62.7%,
    rgba(251, 138, 52, 1) 100.2%
  );
  background-size: 200% auto;

  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 2s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  span {
    color: ${(props) => props.theme.text.primary};
    -webkit-text-fill-color: ${(props) => props.theme.text.primary};
  }
`;

const Home = ({}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Title>
          <span> Hey there </span> I'm Rosalie <span> and I'm a </span>
          creative front-end developer<span>, </span>
          UX designer <span> and </span>
          blogger<span>.</span>
        </Title>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Home;
