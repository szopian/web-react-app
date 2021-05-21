import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { FiTwitter, FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
import useDocumentScrollThrottled from "../utility/useDocumentScrollThrottled.js";

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

  .shadow {
    box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
  }

  .hidden {
    transform: translateY(-110%);
  }
`;

const Logo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

const List = styled.div`
  display: flex;
  right: 0;
  margin-left: 1vw;
  flex: 0 1 auto;
  position: absolute;
  min-width: -webkit-min-content;
  min-width: min-content;
  cursor: pointer;

  &:hover {
    color: #a4a4a4;
  }
`;

const ListItem = styled.div`
  padding: 3px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    color: #fff;
  }
`;

function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 40;
  const TIMEOUT_DELAY = 300;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  return (
    <HeaderContainer className={`header ${shadowStyle} ${hiddenStyle}`}>
      <Logo to="/">LOGO</Logo>
      <List>
        <ListItem>
          <FiFacebook />
        </ListItem>
        <ListItem>
          <FiInstagram />
        </ListItem>
        <ListItem>
          <FiTwitter />
        </ListItem>
        <ListItem>
          <FiMail />
        </ListItem>
      </List>
    </HeaderContainer>
  );
}

export default Header;
