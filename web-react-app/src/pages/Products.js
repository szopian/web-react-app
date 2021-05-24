import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/j-gowell-Lp8wAUBB1x8-unsplash.jpg";
import Image1 from "../images/ostap-senyuk-SW4BTHmSGQg-unsplash.jpg";
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
  background: rgba(0, 0, 0, 0.85);

  /* changes images view 
  background: linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);
  */

  mix-blend-mode: overlay;
  background-blend-mode: screen;
`;

const Section = styled.div`
  height: 100vh;
`;

const Row = styled.div`
  display: flex;

  &&&:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Column = styled.div`
  float: left;
  width: 50%;
  padding: 10px 10px;
  margin: 10px;
  height: 300px;
  border-radius: 0px 50px;
  background-color: rgb(255, 255, 255, 0.83);
`;

const ColumnImage = styled.div`
  float: left;
  width: 50%;
  padding: 10px 10px;
  margin: 10px;
  height: 300px;
  background-color: rgb(255, 255, 255, 0.83);
  background-image: url(${Image1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

function Products() {
  return (
    <Page>
      <Section>
        <Overlay />
        <Header />
        <Title title="Products" />
      </Section>
      <Section>
        <Row>
          <ColumnImage>bla bla bla </ColumnImage>
          <Column>bla bla bla</Column>
        </Row>
        <Row>
          <Column>bla bla bla </Column>
          <ColumnImage>bla bla bla</ColumnImage>
        </Row>
      </Section>
    </Page>
  );
}

export default Products;
