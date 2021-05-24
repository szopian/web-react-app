import React from "react";
import styled from "styled-components";

const TextContainer = styled.h2``;

const Text = ({ text }) => {
  return (
    <TextContainer>
      <h2>{text}</h2>
    </TextContainer>
  );
};

export default Text;
