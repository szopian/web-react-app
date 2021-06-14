import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  margin: 20px;
  position: absolute;
  top: 50%;
  left: 33%;
  transform: translate(-50%, -50%);
  font-size: 5em;
  background: linear-gradient(transparent 50%, rgba(212, 175, 55, 0.85) 50%);
  padding: 20px;
  blur: 5px;
  text-transform: uppercase;
  border-radius: 0px 50px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 2px #000;

  @media (max-width: 580px) {
    font-size: 4em;
  }

  @media (max-width: 415px) {
    font-size: 3.5em;
  }

  @media (max-width: 376px) {
    font-size: 3em;
  }

  @media (max-width: 290px) {
    font-size: 2.3em;
  }
`;

const Title = ({ title }) => {
  return <TitleText>{title}</TitleText>;
};

export default Title;
