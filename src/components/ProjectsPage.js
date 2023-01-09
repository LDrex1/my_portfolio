import React from "react";
import styled from "styled-components";
import { device } from "./Device";
import Projects from "./Projects";

//

//
function ProjectsPage() {
  //
  return (
    <Wrapper>
      <Container1>
        <Header>MY PROJECTS</Header>
        <SubHeader>Here are a few, click each image to know more</SubHeader>
      </Container1>
      <Container>
        <Projects />
      </Container>
    </Wrapper>
  );
}

export default ProjectsPage;

const Wrapper = styled.section`
  background: #f5dcc2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//

const Container = styled.div``;
//

const Container1 = styled(Container)`
  width: 100%;
  text-align: center;
  background: #ffce99;
  border-radius: 0 0 30px 30px;

  @media ${device.mobileS} {
    border-radius: 10px;
  }
`;

const Header = styled.h2``;
//
const SubHeader = styled.h5``;
