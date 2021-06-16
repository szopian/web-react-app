import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/robson-hatsukami-morgan-5C6veSN6hec-unsplash.jpg";
import Title from "../components/Title";
import Text from "../components/Text";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";

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

function Home() {
  return (
    <Page>
      <Overlay opacity={0.7} />
      <Header />
      <Title title="Home" />
      <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, facere eum, accusamus iusto soluta reiciendis ipsum voluptates ad perspiciatis alias esse voluptatem natus debitis a unde numquam, exercitationem modi delectus?" />
      <Footer />
    </Page>
  );
}

export default Home;
