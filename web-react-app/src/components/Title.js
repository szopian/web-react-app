import React from "react";
import styled from "styled-components";

const TitleText = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 33%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  blur: 5px;
  text-transform: uppercase;
`;

const Title = ({ title }) => {
  return (
    <TitleText>
      <h1>{title}</h1>
    </TitleText>
  );
};

export default Title;
