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

const About = () => {
  return (
    <div>
      <Page>
        <Overlay />
        <Header />
        <Title title="About" />
        <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, facere eum, accusamus iusto soluta reiciendis ipsum voluptates ad perspiciatis alias esse voluptatem natus debitis a unde numquam, exercitationem modi delectus?" />
      </Page>
      <Footer />
    </div>
  );
};

export default About;
