import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenu4Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

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

  @media screen and (max-width: 768px) {
    font-size: 75%;
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
    color: pink;
  }
`;

const Bars = styled(RiMenu4Line)`
  display: none;
  color: #fff;
  margin-top: 25px;
  margin-right: -20px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    transoform: translate(-100%, 75%);
    cursor: pointer;
    font-size: 1.8rem;
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

const SidebarNav = styled.div`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const CloseX = styled(CgClose)`
  color: #fff;
`;

const SidebarLink = styled(Link)``;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
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
        <SidebarNav>
          <SidebarWrap>
            <NavIcon to="#">
              <CloseX onClick={showSidebar} />
            </NavIcon>

            <SidebarLink to="/about" activeStyle>
              About
            </SidebarLink>
            <SidebarLink to="/home" activeStyle>
              Home
            </SidebarLink>
            <SidebarLink to="/products" activeStyle>
              Products
            </SidebarLink>
            <SidebarLink to="/work" activeStyle>
              Work
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
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
        <CopyRight>
          <h4>© 2021 //GS</h4>
        </CopyRight>
      </FooterNav>
    </>
  );
}

export default Footer;
