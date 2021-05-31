import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenu4Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import bgImage from "../images/david-becker-crs2vlkSe98-unsplash.jpg";
// import bgImage from "../images/";
// import bgImage from "../images/";
// import bgImage from "../images/";

const FooterNav = styled.nav`
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1100;
  background: #000;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

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

  &:active {
    opacity: 0.5;
  }
`;

const Bars = styled(RiMenu4Line)`
  display: none;
  color: #fff;
  margin-top: 27px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    transoform: translate(-100%, 75%);
    cursor: pointer;
    font-size: 1.8rem;
    z-index: 9;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  aligin-items: center;
  margin-right: -20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CopyRight = styled.nav`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 20px;

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
  // bottom: 0;
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
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  cursor: pointer;
  text-shadow: 2px 2px 2px #000;
  justify-content: center;
  aligin-items: center;
  box-shadow: 0 9px 9px -9px rgba(255, 255, 255, 0.6);
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
        <FooterLink to="/">
          <h1>Logo</h1>
        </FooterLink>
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
