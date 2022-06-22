import React, { Component } from "react";
import styled from "styled-components";
function Abiola() {
  return (
    //
    <Card>
      <Image>
        <img src="" alt=""></img>
      </Image>

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
        self-motivated developer, who is willing to learn and create outstanding
        UI applications.
      </CardBody>
    </Card>
  );
}

export default Abiola;

const Card = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #bececc;
  padding: 3px 2px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
`;

const CardTitle = styled.div`
  margin-top: 25px;
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
