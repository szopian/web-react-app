import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 40px 0;
  background: #000;
`;

const FooterNav = styled.div`
  position: absolute;
  z-index: 1100;
  display: flex;
`;

const FooterItem = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 0 auto;
  justify-content: center;
`;

const FooterLink = styled(Link)`
  transition: 0.3s;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.5;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterItem>
          <FooterLink to="/about">About</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/home">Home</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/products">Products</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/work">Work</FooterLink>
        </FooterItem>
      </FooterNav>
    </FooterContainer>
  );
}

export default Footer;
