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
        ...contact me on any of these platforms if you'd like to request for my
        service or have a quick chat. I'll be waiting :{")"}.
      </Paragraph>

      <MediaDiv>
        <MediaGroup id="contactMe">
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

const Container = styled.div``;

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
