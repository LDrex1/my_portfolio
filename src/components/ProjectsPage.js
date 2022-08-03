import React from "react";
import styled from "styled-components";
import Projects from "./Projects";

//

//
function ProjectsPage() {
  //
  return (
    <Wrapper>
      <Header>MY PROJECTS</Header>
      <SubHeader>Click each image to know more</SubHeader>
      <Container>
        {/*  */}
        <Projects />
        {/*  */}
      </Container>
    </Wrapper>
  );
}

export default ProjectsPage;

const Wrapper = styled.section`
  background: #ffce99;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//

const Container = styled.div``;
//

const Header = styled.h2``;
//
const SubHeader = styled.h5``;
