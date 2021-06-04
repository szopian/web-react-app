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
  padding: 0.5rem calc((100vw - 1000px) / 2);
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1100;
  background: #000;
  margin-top: -60px;
  background: transparent;

  // background-image: url(${bgImage});
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;

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
  // background: linear-gradient(transparent 50%, rgba(212, 175, 55, 0.85) 50%);
  // border-radius: 0px 20px;
  margin-left: 5px;
  text-shadow: 2px 2px 2px #000;
  letter-spacing: 2px;

  &:active {
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.7;
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

const Bars = styled(RiMenu4Line)`
  display: none;
  color: #fff;
  margin-top: 27px;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transoform: translate(-100%, 75%);
    cursor: pointer;
    font-size: 2rem;
    z-index: 9;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  aligin-items: center;
  margin-right: -20px;
  background: linear-gradient(transparent 50%, rgba(212, 175, 55, 0.85) 50%);
  border-radius: 0px 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CopyRight = styled.nav`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 15px;
  text-shadow: 2px 2px 2px #000;

  @media screen and (max-width: 768px) {
  }
`;

/* SIDEBAR */

const SidebarNav = styled.div`
  font-size: 20px;
  width: 100%;
  height: 350px;
  display: flex;
  position: fixed;
  bottom: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
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
  aligin-items: center;
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
  aligin-items: center;
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
          <h1>Logo</h1>
        </FooterLinkLogo>
        <Bars onClick={showSidebar} />
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
