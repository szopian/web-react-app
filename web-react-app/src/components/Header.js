import React from "react";
import styled from "styled-components";

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
`;

const Logo = styled.div``;

const List = styled.div`
  display: flex;
`;

const ListItem = styled.div`
  color: pink;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      <List>
        <ListItem>Face</ListItem>
        <ListItem>Insta</ListItem>
        <ListItem>Twit</ListItem>
      </List>
    </HeaderContainer>
  );
}

export default Header;
