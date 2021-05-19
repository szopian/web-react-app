import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "../images/mattias-olsson-nQz49efZEFs-unsplash.jpg";

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
  letter-spacing: -0.02em;
  line-height: 1em;
  text-transform: none;
  padding-right: 0.5em;
  padding-left: 0;
  margin: 0 auto;
  color: white;
  position: relative;
  }
`;

  const NavItem = styled.div`
    display: block;
    margin: 0 auto;
    cursor: pointer;
    padding: 5px;
  `;

  const NavLink = styled.a`
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
  `;

  return (
    <Page>
      <Header />
      <NavbarContainer>
        <Nav>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Work</NavLink>
          </NavItem>
        </Nav>
      </NavbarContainer>
    </Page>
  );
}

export default WelcomePage;
