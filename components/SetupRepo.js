import React from "react";
import Header from "./header";
import Footer from "./footer";
import { apiEndpoint } from "../prismic-configuration";
import Layout from "./layout";
import styled from "styled-components";

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-Bold";
  padding-left: 2rem;
`;

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
 * Setup repo component
 */
const SetupRepo = () => {
  const repoUrl = `${apiEndpoint.replace(".cdn", "").slice(0, -6)}documents/`;

  return (
    <Layout>
      <Header />
      <Container>
        <Title>Good job!</Title>
        <h2>You're halfway done with setting up your Prismic website</h2>
        <h4>
          Just visit your <a href={repoUrl}>Prismic dashboard</a> and add some
          content there
        </h4>
      </Container>

      <Footer />
    </Layout>
  );
};

export default SetupRepo;
