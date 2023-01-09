import React, { useContext } from "react";
import styled from "styled-components";
import ConnectTemp from "./ConnectTemp";
import { CursorContext } from "./providers/CursorContextProvider";

function Footer() {
  const { setCursorType } = useContext(CursorContext);

  const handleMouseEnter = () => {
    console.log("first");
    setCursorType("footer");
  };
  const handleMouseLeave = () => {
    setCursorType("");
  };
  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ConnectTemp />
      <Copyright>&copy;2022</Copyright>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #1b1a1a;
  color: #e1ac73;
  min-height: 20vh;
  padding: 1rem 0.6rem 0.2rem;
`;

const Copyright = styled.h6`
  margin-top: 3vw;
  text-align: center;
  color: whitesmoke;
`;
