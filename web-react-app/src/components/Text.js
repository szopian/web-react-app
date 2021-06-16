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
  letter-spacing: 1px;
  font-weight: bold;
  background-color: rgb(255, 255, 255, 0.93);
  color: #000;
  text-align: center;
  min-width: 400px;

  @media (max-width: 470px) {
    min-width: 0;
    font-size: 80%;
  }
`;

const Text = ({ text }) => {
  return <TextContainer>{text}</TextContainer>;
};

export default Text;
