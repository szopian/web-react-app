import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 40px 0;
  display: flex;
`;

const FooterNav = styled.div`
  z-index: 1100;
  display: flex;
  border-right: solid 1px #fff;
  padding: 0px 40px;
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

const CopyRight = styled.p`
  color: #fff;
  padding: 10px 50px;
  font-size: 12px;
  border-right: solid 1px #fff;
`;

function Footer() {
  return (
    <FooterContainer>
      <CopyRight>Copyright © 2021 //GS SZOPIAN</CopyRight>
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
