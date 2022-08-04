import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import myself from "../images/ME.png";
import Skills from "./Skills";
import { device } from "./Device";
import email from "../assets/lottie-animations/lf30_editor_8lz4cyp1.json";

function Abiola() {
  const lottieEmail = useRef();

  function mouseEnter() {
    lottieEmail.current.play();
  }

  return (
    //
    <Card className="personal">
      <Image className="myself"></Image>

      <Details className="details">
        <CardTitle className="card-title">
          <Name>Oluwadamilare Abiola</Name>
          <Job>Front-end developer</Job>
        </CardTitle>
        <Contact className="contact-me">
          <Email
            onClick={() => (window.location = "#contactMe")}
            onMouseEnter={() => mouseEnter()}
          >
            <Player
              ref={lottieEmail}
              autoplay={false}
              loop={false}
              src={email}
              style={{
                width: "60px",
                height: "60px",
              }}
            ></Player>
          </Email>
        </Contact>
        <MiniWrapper className="about">
          <CardBody>
            self-motivated developer. Always and blank canvas and willing to
            learn and create outstanding UI applications.
          </CardBody>
          <Skills />
        </MiniWrapper>
      </Details>
    </Card>
  );
}

export default Abiola;

const Card = styled.div`
  min-height: 100vh;
  background: #ffce99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #663500;
  padding-top: 1.2rem;

  @media ${device.mobileS} {
    padding-bottom: 12vh;
  }

  @media ${device.mobileM} {
    flex-direction: row;
    justify-content: start;
    padding-top: 8vh;
    padding-right: 3vw;
  }
`;

const Image = styled.div`
  background-image: url(${myself}) !important;
  background-blend-mode: lighten;
  background-size: cover;
  background-position: 100% 23%;
  width: 90vw;
  height: 45vh;
  margin-left: 3vw;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    background: linear-gradient(transparent 0%, transparent 50%, #ffce99 100%);
    top: 50%;
    width: 100%;
    height: 50%;
    mix-blend-mode: lighten;
  }

  @media ${device.mobileM} {
    justify-self: start;
    margin-left: 0;
    flex: 1;
    height: calc(20vw + 30vh);
  }
`;

const Details = styled.div`
  @media ${device.mobileM} {
    align-self: center;
    flex: 1;
  }
`;

const CardTitle = styled.div`
  text-align: center;
`;

const Name = styled.h2``;

const Job = styled.h5``;

const Contact = styled.div`
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 5px;
  justify-content: center;
`;

const Email = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

const MiniWrapper = styled.div`
  background: linear-gradient(#ffb566 0%, #ffb566 50%, #ffcc99);
  border-radius: 20px;

  @media ${device.mobileS} {
    border-radius: 5px;
  }
`;

const CardBody = styled.p`
  padding: 0 0.6rem;
  margin-top: 10px;
`;
