import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/ostap-senyuk-SW4BTHmSGQg-unsplash.jpg";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";

import Title from "../components/Title";
import Text from "../components/Text";

const Page = styled.div`
  height: 200vh;
  width: 100%;
  color: #fff;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: -60px;
`;

const About = () => {
  return (
    <Page>
      <Overlay opacity={0.9} />
      <Header />
      <Title title="About" />
      <Text text="FLAKE Snowboards are the only 100% independent handmade snowboard manufacturer in the UK. We have been handcrafting snowboards since 2012. We pride ourselves on manufacturing to the highest quality." />
      <Footer />
    </Page>
  );
};

export default About;
