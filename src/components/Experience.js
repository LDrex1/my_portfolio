import React from "react";
import styled from "styled-components";

function Experience() {
  return (
    <Container>
      <Title>
        <Logo className="logo">{}</Logo>
        <JobInfo>
          <Date>{}</Date>
          <Job>{}</Job>
        </JobInfo>
      </Title>
      <JobDesptn>{}</JobDesptn>
    </Container>
  );
}

export default Experience;

const Container = styled.div``;

//
const Title = styled.div``;

//
const Logo = styled.div``;

//
const JobInfo = styled.div``;

//
const Date = styled.div``;

//
const Job = styled.p``;

//
const JobDesptn = styled.div``;
