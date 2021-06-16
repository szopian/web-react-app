import styled from "styled-components";

const OverlayCover = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${(props) => props.Opacity});
  mix-blend-mode: overlay;
  background-blend-mode: screen;
`;

const Overlay = ({ opacity }) => {
  return <OverlayCover Opacity={opacity} />;
};

export default Overlay;
