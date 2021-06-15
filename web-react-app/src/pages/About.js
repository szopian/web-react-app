import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/ostap-senyuk-SW4BTHmSGQg-unsplash.jpg";
import Footer from "../components/Footer";

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

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  mix-blend-mode: overlay;
  background-blend-mode: screen;
`;

const About = () => {
  return (
    <Page>
      <Overlay />
      <Header />
      <Title title="About" />
      <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, facere eum, accusamus iusto soluta reiciendis ipsum voluptates ad perspiciatis alias esse voluptatem natus debitis a unde numquam, exercitationem modi delectus?" />
      <Footer />
    </Page>
  );
};

export default About;
