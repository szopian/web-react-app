import React from "react";
import styled from "styled-components";

import { FiTwitter } from "react-icons/fi";

const HeaderContainer = styled.div`
  z-index: 1100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 3vw;
  padding: 3vw 0;
  display: flex;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  color: white;
`;

const Logo = styled.div``;

const List = styled.div`
  display: flex;
  right: 0;
  margin-left: 1vw;
  flex: 0 1 auto;
  position: absolute;
  min-width: -webkit-min-content;
  min-width: min-content;
  cursor: pointer;
`;

const ListItem = styled.div`
  padding: 3px;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      <List>
        <ListItem>Face</ListItem>
        <ListItem>Insta</ListItem>
        <ListItem>
          <FiTwitter />
        </ListItem>
      </List>
    </HeaderContainer>
  );
}

export default Header;
