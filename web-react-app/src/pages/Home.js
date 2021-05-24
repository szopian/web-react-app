import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/robson-hatsukami-morgan-5C6veSN6hec-unsplash.jpg";
import Title from "../components/Title";

const Page = styled.div`
  background: #000;
  height: 200vh;
  width: 100%;
  color: #fff;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  /* changes images view 
  background: linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);
  */

  mix-blend-mode: overlay;
  background-blend-mode: screen;
`;

function Home() {
  return (
    <Page>
      <Overlay />
      <Header />
      <Title title="Home" />
    </Page>
  );
}

export default Home;
