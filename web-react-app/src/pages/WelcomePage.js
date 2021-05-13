import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Page = styled.div`
  height: 100vh;
  width: 100%;
  backgroud: pink;
`;

function WelcomePage() {
  return (
    <Page>
      <Header />
      <Navbar />
    </Page>
  );
}

export default WelcomePage;
