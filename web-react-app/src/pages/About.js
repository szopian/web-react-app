import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/ostap-senyuk-SW4BTHmSGQg-unsplash.jpg";

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
  background: rgba(0, 0, 0, 0.9);

  /* changes images view 
  background: linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);
  */

  mix-blend-mode: overlay;
  background-blend-mode: screen;
`;

const Title = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  background: #000;
  padding: 5px 10px;
  blur: 5px;
`;

function About() {
  return (
    <div>
      <Page>
        <Overlay />
        <Header />
        <Title>What about us?!</Title>
      </Page>
    </div>
  );
}

export default About;
