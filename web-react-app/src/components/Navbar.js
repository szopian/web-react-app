import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 13.5vw;
  width: calc(100% - 13.5vw);
`;

const Nav = styled.div`
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
  }
`;

const NavItem = styled.a`
  display: block;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: black;
    opacity: 0.6;
`;

// &:hover ${Page} {
//   background-image: none;
// }
//

function Navbar() {
  return (
    <NavbarContainer>
      <Nav>
        <NavItem>About</NavItem>
        <NavItem>Home</NavItem>
        <NavItem>Products</NavItem>
        <NavItem>Work</NavItem>
      </Nav>
    </NavbarContainer>
  );
}

export default Navbar;
