import React from "react";
import styled from "styled-components";

const allSkills = [
  {
    skill: "React",
    img: require("../images/react-logo.jpg"),
  },
  {
    skill: "JavaScript",
    img: require("../images/javaScript-logo.png"),
  },
  {
    skill: "Bootstrap",
    img: require("../images/javaScript-logo.png"),
  },
  {
    skill: "SCSS",
    img: require("../images/javaScript-logo.png"),
  },
  {
    skill: "CSS",
    img: require("../images/css-logo.jpg"),
  },
  {
    skill: "html",
    img: require("../images/html-logo.jpg"),
  },
];
function Skills() {
  return (
    <Container>
      <UnorderedLi>
        {allSkills.map((skill) => (
          <List className={skill.skill}>
            <Image background={skill.img}></Image>
            <Label>{skill.skill}</Label>
          </List>
        ))}
      </UnorderedLi>
    </Container>
  );
}

export default Skills;

//
const Container = styled.section`
  margin-top: 20px;
`;

const UnorderedLi = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 20px;
  justify-content: center;
`;

//
const List = styled.li``;

//
const Label = styled.p`
  margin-top: 5px;
  text-align: center;
`;

//
const Image = styled.div`
  background: url(${(props) => props.background}) no-repeat center/cover;
  margin-right: auto;
  margin-left: auto;
  width: 60px;
  height: 60px;
`;
