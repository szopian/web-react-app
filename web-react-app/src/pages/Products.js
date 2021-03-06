import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/j-gowell-Lp8wAUBB1x8-unsplash.jpg";
import Image1 from "../images/ostap-senyuk-SW4BTHmSGQg-unsplash.jpg";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";

const Page = styled.div`
  height: 100vh;
  width: 100%;
  color: #fff;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: -60px;
`;

const CardGrid = styled.div`
  padding: 3rem 3rem;
  margin: 3rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  max-width: 1000px;
  margin: auto;
  background: #000;

  position: flex-box;
  z-index: 15;
  max-width: 1732px;
  margin-left: auto;
  margin-right: auto;
  padding: 10vw 18vw;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 10px;
  border-radius: 0px 50px;
  background-color: rgb(255, 255, 255, 0.83);
  color: #000;
`;

const ImageCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 10px;
  border-radius: 0px 50px;
  min-height: 200px;

  background-color: rgb(255, 255, 255, 0.83);
  background-image: url(${Image1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Article = styled.p`
  padding: 20px;
`;

function Products() {
  return (
    <Page>
      <Overlay opacity={0.85} />
      <Header />
      <Title title="Products" />

      <CardGrid>
        <ImageCard />
        <Card>
          <Article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eveniet eligendi hic pariatur, sunt repellendus quidem
            non nostrum ducimus saepe aut sapiente harum beatae quod mollitia
            perferendis inventore, temporibus reiciendis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Article>
        </Card>
        <Card>
          <Article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eveniet eligendi hic pariatur, sunt repellendus quidem
            non nostrum ducimus saepe aut sapiente harum beatae quod mollitia
            perferendis inventore, temporibus reiciendis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Article>
        </Card>
        <Card>
          <Article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eveniet eligendi hic pariatur, sunt repellendus quidem
            non nostrum ducimus saepe aut sapiente harum beatae quod mollitia
            perferendis inventore, temporibus reiciendis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Article>
        </Card>
        <ImageCard />
        <Card>
          <Article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eveniet eligendi hic pariatur, sunt repellendus quidem
            non nostrum ducimus saepe aut sapiente harum beatae quod mollitia
            perferendis inventore, temporibus reiciendis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Article>
        </Card>
      </CardGrid>
      <Footer />
    </Page>
  );
}

export default Products;
