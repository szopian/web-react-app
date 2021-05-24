import React from "react";
import styled from "styled-components";

const TitleText = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 33%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.85) 50%);
  padding: 20px;
  blur: 5px;
  text-transform: uppercase;
  border-radius: 0px 50px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 2px #000;
`;

const Title = ({ title }) => {
  return (
    <TitleText>
      <h1>{title}</h1>
    </TitleText>
  );
};

export default Title;
