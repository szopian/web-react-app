import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenu4Line } from "react-icons/ri";

const FooterNav = styled.nav`
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 40px 0;
  display: flex;
`;

const Logo = styled.div`
  z-index: 1100;
  display: flex;
  padding: 0px 40px;
  color: #fff;
`;

const Bars = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 0 auto;
  justify-content: center;
`;

const FooterMenu = styled.div`
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const CopyRight = styled.p`
  color: #fff;
  padding: 10px 50px;
  font-size: 12px;
`;

function Footer() {
  return (
    <>
      <FooterNav>
        <Logo to="/">Logo</Logo>
        <Bars />
        <FooterMenu>
          <FooterLink to="/about" activeStyle>
            About
          </FooterLink>
          <FooterLink to="/home" activeStyle>
            Home
          </FooterLink>
          <FooterLink to="/products" activeStyle>
            Products
          </FooterLink>
          <FooterLink to="/work" activeStyle>
            Work
          </FooterLink>
        </FooterMenu>
        <CopyRight>© 2021 //GS</CopyRight>
      </FooterNav>
    </>
  );
}

export default Footer;
