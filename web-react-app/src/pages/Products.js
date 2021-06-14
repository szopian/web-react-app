import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/j-gowell-Lp8wAUBB1x8-unsplash.jpg";
import Image1 from "../images/ostap-senyuk-SW4BTHmSGQg-unsplash.jpg";
import Title from "../components/Title";
import Footer from "../components/Footer";

const Page = styled.div`
  background: #000;
  height: 100vh;
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
  background: rgba(0, 0, 0, 0.85);

  /* changes images view 
  background: linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);
  */

  mix-blend-mode: overlay;
  background-blend-mode: screen;
`;

const CardGrid = styled.div`
  // padding: 1rem;
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
  padding: 4vw 20vw;

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
      <Overlay />
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
