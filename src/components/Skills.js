import React from "react";
import styled from "styled-components";

const allSkills = [
  {
    skill: "React",
    img: require("../images/react-logo.png"),
  },
  {
    skill: "Three.js",
    img: require("../images/threeJs-logo.png"),
  },
  {
    skill: "JavaScript",
    img: require("../images/javaScript-logo.png"),
  },
  {
    skill: "Firebase",
    img: require("../images/firebase-logo.png"),
  },
  {
    skill: "Bootstrap",
    img: require("../images/bootstrap.png"),
  },
  {
    skill: "SCSS",
    img: require("../images/scss-logo.png"),
  },
  {
    skill: "CSS",
    img: require("../images/css-logo.png"),
  },
  {
    skill: "html",
    img: require("../images/html-logo.png"),
  },
];
function Skills() {
  return (
    <Container className="container">
      <Header>Skills</Header>
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
//

const Header = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;

const UnorderedLi = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  //   justify-content: space-around;
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
  mix-blend-mode: luminosity;
  margin-right: auto;
  margin-left: auto;
  width: 60px;
  height: 60px;

  &:hover {
    mix-blend-mode: overlay;
  }
`;
