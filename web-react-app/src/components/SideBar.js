import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

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

const SidebarWrap = styled.div``;

const SidebarLink = styled(Link)``;

function SideBar() {
  return (
    <>
      <SidebarNav>
        <SidebarWrap>
          <CgClose onClick={showSidebar} />
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
    </>
  );
}

export default SideBar;
