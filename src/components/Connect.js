import React from "react";
import styled from "styled-components";
import { device } from "./Device";

function Connect() {
  return (
    <Container>
      <Paragraph>
        <Header>You like what you see?</Header>
        <br></br>
        ...you can contact me on any of these platforms if you'd like to request
        for my service or have a quick chat. I'll be waiting :{")"}.
      </Paragraph>

      <Form>
        <InputGroup>
          <Input type={"text"} placeholder="name"></Input>
          <Input type={"email"} placeholder="email"></Input>
          <Input type={"text"} placeholder="message"></Input>
        </InputGroup>

        <Button>Connect</Button>
      </Form>
    </Container>
  );
}

export default Connect;
//

const Container = styled.div`
  background: #1b1a1a;
  color: #e1ac73;
  height: 50vh;
  padding: 1rem 0.6rem;

  @media ${device.mobileL} {
    display: flex;
    column-gap: 3vw;
    align-items: center;
  }
`;

const Paragraph = styled.p`
  @media ${device.mobileL} {
    flex: 1;
  }
`;
//

const Header = styled.h3`
  display: inline;
`;
//

const Form = styled.form`
  margin-top: 20px;

  @media ${device.mobileL} {
    flex: 1;
  }
`;
//

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 80vw;
  border-radius: 3px;
  margin: 0 auto;
  height: calc(8px + 2.4vw);
  min-height: 25px;
  padding: 4px;
  outline: none;
  box-shadow: inset 0 0.08rem 0 0 #ffce99;

  &:focus {
    border: 1px solid #e1ac73;
    box-shadow: inset 0 0 5px 0 #ffce99;
  }

  & + & {
    margin-top: calc(5px + 1.2vw);
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`;
//
const Button = styled.button`
  // display: inline-block;
  border: none;
  border-radius: 3px;
  background: #dfa76b;
  margin: auto;
  margin-top: 30px;
  padding: 0.4rem;
`;
