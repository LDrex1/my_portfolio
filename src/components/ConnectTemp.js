import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { device } from "./Device";

function ConnectTemp() {
  return (
    <Container>
      <Paragraph>
        <Header>You like what you see?</Header>
        <br></br>
        ...you can contact me on any of these platforms if you'd like to request
        for my service or have a quick chat. I'll be waiting :{")"}.
      </Paragraph>

      <MediaDiv>
        <MediaGroup>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/oluwadamilare-abiola-a31163245/"
              )
            }
            style={{ cursor: "pointer" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            onClick={() => window.open("https://github.com/LDrex1")}
            style={{ cursor: "pointer" }}
          ></FontAwesomeIcon>
        </MediaGroup>
      </MediaDiv>
    </Container>
  );
}

export default ConnectTemp;
//

const Container = styled.div`
  background: #1b1a1a;
  color: #e1ac73;
  min-height: 20vh;
  padding: 1rem 0.6rem;

  @media ${device.mobileL} {
    // display: flex;
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

const MediaDiv = styled.div`
  margin-top: 20px;

  @media ${device.mobileL} {
    flex: 1;
  }
`;
//

const MediaGroup = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
  color: whitesmoke;
`;

const Media = styled.div`
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
