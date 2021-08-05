import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenu4Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import bgImage from "../images/mitchell-luo-U9EWuhUzgs0-unsplash.jpg";

const FooterNav = styled.nav`
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 100px;
  display: flexbox;
  justify-content: space-around;
  align-items: center;
  display: flex;
  z-index: 1100;
  background: #000;
  margin-top: -60px;
  background: linear-gradient(transparent 30%, #000);
  position: fixed;

  @media screen and (max-width: 768px) {
    font-size: 80%;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 5px;
  text-shadow: 2px 2px 2px #000;
  letter-spacing: 2px;

  &:active {
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.7;
    transform: translateY(-5px);
  }
`;

const FooterLinkLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-shadow: 2px 2px 2px #000;

  &:active {
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const BarContainer = styled.div`
  align-self: flex-start;
  justify-self: center;
  padding: 20px 20px;
  margin-right: -30px;
`;

const Bars = styled(RiMenu4Line)`
  display: none;
  color: #fff;
  transition: 0.3s ease 0;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    /* margin: 10px 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-100%, 75%);
    cursor: pointer;
    font-size: 2rem;
    z-index: 9;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(transparent 50%, rgba(212, 175, 55, 0.85) 50%);
  border-radius: 0px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CopyRight = styled.nav`
  display: flex;
  align-self: center;
  color: #fff;
  text-shadow: 2px 2px 2px #000;
`;

/* SIDEBAR */

const SidebarNav = styled.div`
  font-size: 20px;
  width: 100%;
  height: 350px;
  display: flex;
  position: fixed;
  bottom: ${({ sidebar }) => (sidebar ? "0" : "-200%")};
  transition: 600ms;
  z-index: 10;
  border-radius: 50px 0px;
  background: linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const SidebarWrap = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CloseX = styled(CgClose)`
  color: #fff;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  cursor: pointer;
  // text-shadow: 2px 2px 2px #000;
  justify-content: center;
  align-items: center;
  box-shadow: 0 9px 9px -9px rgba(255, 255, 255, 0.6);
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 3rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function Footer() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <FooterNav>
        <FooterLinkLogo to="/">
          <h1>Flake</h1>
        </FooterLinkLogo>
        <BarContainer>
          <Bars onClick={showSidebar} />
        </BarContainer>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <CloseX onClick={showSidebar} />
            </NavIcon>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/home">Home</SidebarLink>
            <SidebarLink to="/products">Products</SidebarLink>
            <SidebarLink to="/work">Work</SidebarLink>
          </SidebarWrap>
        </SidebarNav>
        <FooterMenu>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/home">Home</FooterLink>
          <FooterLink to="/products">Products</FooterLink>
          <FooterLink to="/work">Work</FooterLink>
        </FooterMenu>
        <CopyRight>
          <h4>© 2021 //GS</h4>
        </CopyRight>
      </FooterNav>
    </>
  );
}

export default Footer;
