import React, { Component } from "react";
import styled from "styled-components";
import myself from "../images/ME.png";
import Skills from "./Skills";

// const myself = require("../images/ME.png");
function Abiola() {
  return (
    //
    <Card className="personal">
      <Image>
        {/* <img src={myself} style={{ width: "100px" }} alt="ME:)"></img> */}
      </Image>

      <div>
        <CardTitle className="card-title">
          <h3>Oluwadamilare Abiola</h3>
          <h5>Front-end developer</h5>
        </CardTitle>
        <Contact className="contact-me">
          <p>
            <span>..</span>damzealwini7@gmail.com
          </p>
          <p>
            <span>..</span>(+234) 546 624 342
          </p>
        </Contact>
        <CardBody>
          self-motivated developer, who is willing to learn and create
          outstanding UI applications.
        </CardBody>
        <Skills />
      </div>
    </Card>
  );
}

export default Abiola;

const Card = styled.div`
  height: 100vh;
  //   display: flex;
  align-items: center;
  background: #1a052e;
  justify-content: space-between;
  color: white;
  padding-right: 5vw;
`;

const Image = styled.div`
  background-image: url(${myself});
  background-size: cover;
  background-position: 100% 23%;
  width: 90vw;
  //   height: 49vh;
  height: 40vh;
  margin: auto;
`;

const CardTitle = styled.div`
  text-align: center;
  border: 2px solid red;
`;

const Contact = styled.div`
  margin-top: 8px;
  border: 2px solid blue;
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 5px;
  justify-content: center;
`;

const CardBody = styled.p`
  margin-top: 10px;
`;
