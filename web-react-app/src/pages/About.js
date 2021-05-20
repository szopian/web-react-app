import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Page = styled.div`
  background: #000;
  height: 100vh;
  width: 100%;
  color: #fff;
`;

function About() {
  return (
    <Page>
      <Header />
      <h1> Hi About!!</h1>
    </Page>
  );
}

export default About;
