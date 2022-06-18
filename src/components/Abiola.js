import React, { Component } from "react";
import styled from "styled-component";
function Abiola() {
  return (
    <Card>
      <Image>
        <img src="" alt=""></img>
      </Image>

      <CardTitle className="card-title">
        <h3>Oluwadamilare Abiola</h3>
        <h6>Front-end developer</h6>
      </CardTitle>

      <Contact className="contact-me">
        <span>..</span> <p>damzealwini7@gmail.com</p>
        <span>..</span> <p>(+234) 546 624 342</p>
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
  background: #bececc
  padding: 3px 2px;
  width: 100px;
`;

const Image = styled.div`
  width: 40px;
  height: 40px;
`;

const CardTitle = styled.div`
  margin-top: 30px;
`;

const Contact = styled.div`
  margin-top: 10px;
`;

const CardBody = styled.p`
  margin-top: 10px;
`;
