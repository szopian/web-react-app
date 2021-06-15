import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../images/mattias-olsson-nQz49efZEFs-unsplash.jpg";

import AboutImage from "../images/ostap-senyuk-SW4BTHmSGQg-unsplash.jpg";
import HomeImage from "../images/robson-hatsukami-morgan-5C6veSN6hec-unsplash.jpg";
import ProductImage from "../images/j-gowell-Lp8wAUBB1x8-unsplash.jpg";
import WorkImage from "../images/adam-adams-mrl0Gr8Y20s-unsplash.jpg";

function WelcomePage() {
  const [backgroundImage, setBackgroundImage] = useState(Image);

  const setStyle = (image) => {
    setBackgroundImage(image);
  };

  const Page = styled.div`
    height: 100vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `;

  const Overlay = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    /* changes images view */
    background: linear-gradient(red, transparent),
      linear-gradient(to top left, lime, transparent),
      linear-gradient(to top right, blue, transparent);

    mix-blend-mode: overlay;
    background-blend-mode: screen;
  `;

  const NavbarContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 13.5vw;
    width: calc(100% - 13.5vw);
  `;

  const Nav = styled.nav`
    font-size: 40px;
    font-weight: 400;
    font-style: normal;
    line-height: 1em;
    padding-right: 0.5em;
    padding-left: 0;
    margin: 0 auto;
    position: relative;
  `;

  const NavItem = styled.div`
    display: block;
    margin: 0 auto;
  `;

  const NavLink = styled(Link)`
    color: white;
    transition: 0.3s;
    cursor: pointer;
    text-shadow: 1.5px 1.5px #000;
    text-decoration: none;
    letter-spacing: -0.02em;

    &:hover {
      opacity: 0.5;
    }
  `;

  return (
    <Page>
      <Overlay />
      <Header />
      <NavbarContainer>
        <Nav>
          <NavItem>
            <NavLink
              to="/about"
              onMouseEnter={() => setStyle(AboutImage)}
              onMouseOut={() => setStyle(Image)}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/home"
              onMouseEnter={() => setStyle(HomeImage)}
              onMouseOut={() => setStyle(Image)}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/products"
              onMouseEnter={() => setStyle(ProductImage)}
              onMouseOut={() => setStyle(Image)}
            >
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/work"
              onMouseEnter={() => setStyle(WorkImage)}
              onMouseOut={() => setStyle(Image)}
            >
              Work
            </NavLink>
          </NavItem>
        </Nav>
      </NavbarContainer>
    </Page>
  );
}

export default WelcomePage;
