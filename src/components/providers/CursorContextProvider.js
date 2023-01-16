import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";

export const CursorContext = createContext("cursorContext");

function CursorContextProvider({ children }) {
  const [mousePos, setMousePos] = useState({ clientX: null, clientY: null });
  const { clientX, clientY } = mousePos;
  /**
   * cursorTypes may be [work, link, firstpage, footer]
   */
  const [cursorType, setCursorType] = useState("");

  const handleCursorMove = (ev) => {
    const { clientX, clientY } = ev;
    setMousePos({ clientX: clientX, clientY: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleCursorMove);
    return () => document.removeEventListener("mousemove", handleCursorMove);
  });

  return (
    <>
      <CursorContext.Provider value={{ cursorType, setCursorType }}>
        <DivAbs
          className={`cursor ${cursorType}`}
          clientX={clientX}
          clientY={clientY}
        >
          <Div></Div>
        </DivAbs>
        {children}
      </CursorContext.Provider>
    </>
  );
}

export default CursorContextProvider;

const Div = styled("span")`
  z-index: 3;
  pointer-events: none;
  border-radius: 50%;
  background: #666666;
  width: 8px;
  height: 8px;
  //   -webkit-transition-duration: 10ms;
  //   transition-duration: 10ms;
  //   transition-delay: 0ms;
  //   -webkit-transition-timing-function: linear;
  //   transition-timing-function: linear;
  will-change: width, height, transform, border;
  pointer-events: none;
`;

const DivAbs = styled(Div)`
  position: fixed;
  content: "";
  top: ${({ clientY }) => clientY - 5 + "px"};
  left: ${({ clientX }) => clientX - 5 + "px"};
  background: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  &.footer {
    background: #666666;
  }
  &.first-page {
    background: #555555;
  }
  &.work {
    background: #ffce99;
  }
`;
