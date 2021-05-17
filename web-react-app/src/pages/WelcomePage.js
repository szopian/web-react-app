import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Image from "../images/mattias-olsson-nQz49efZEFs-unsplash.jpg";

const Page = styled.div`
  height: 100vh;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
