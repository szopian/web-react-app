import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  box-sizing: border-box;
  width: calc(100% - 13.5vw);
`;

const FooterNav = styled.div`
  font-size: 40px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.02em;
  line-height: 1em;
  text-transform: none;
  padding-right: 0.5em;
  padding-left: 0;
  margin: 0 auto;
  color: white;
  display: flex;
`;

const FooterItem = styled.div`
  margin: 0 auto;
  cursor: pointer;
  padding: 5px;
`;

const FooterLink = styled.div`
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterItem>
          <FooterLink>About</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Home</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Products</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Work</FooterLink>
        </FooterItem>
      </FooterNav>
    </FooterContainer>
  );
}

export default Footer;
