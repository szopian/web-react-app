import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div``;

const Logo = styled.img``;

const List = styled.div``;

const ListItem = styled.div``;

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
