import React from "react";
import styled from "styled-components";

const TextContainer = styled.h3`
  margin: 20px;
  position: absolute;
  top: 100%;
  left: 55%;
  transform: translate(-50%, -50%);
  padding: 20px;
  text-transform: uppercase;
  border-radius: 0px 50px;
  letter-spacing: 2px;
  // text-shadow: 2px 2px 2px #000;
  background-color: rgb(255, 255, 255, 0.83);
  color: #000;
  text-align: center;
`;

const Text = ({ text }) => {
  return <TextContainer>{text}</TextContainer>;
};

export default Text;
