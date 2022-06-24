import React from "react";
import styled from "styled-components";

//
const sites = [
  {
    name: "finsweet",
    image: "",
    links: {
      live: "https://ldrex1.github.io/CSUF/",
      gitHub: "https://github.com/LDrex1/CSUF",
    },
    about:
      "A multipage website on an automobile repair company. All pages are fully responsive.",
    resources: ["HTML", "and CSS"],
  },
  {
    name: "mY mInD",
    image: "",
    links: {
      live: "https://ldrex1.github.io/posts_from_API/",
      gitHub: "https://github.com/LDrex1/posts_from_API",
    },
    about: `A website where you can check, update, delete and view posts, similar to a social media website. Data was gotten from "yourplaceholder API".
     All pages are fully responsive.`,
    resources: ["HTML", "CSS", "and JavaScript"],
  },
  {
    name: "CSUF",
    image: "",
    links: {
      live: "https://ldrex1.github.io/CSUF/",
      gitHub: "https://github.com/LDrex1/CSUF",
    },
    about: `A tech brand website built based on an existing figma design.
     All pages are fully responsive.`,
    resources: ["HTML", "and Bootstrap"],
  },
  {
    name: "Utopia",
    image: "",
    links: {
      live: "df",
      gitHub: "dd",
    },
    about: `A two-paged webApp that shows all the countries of the world and their main data.
    Data is gotten from the "countries rest API".
     All pages are fully responsive.`,
    resources: ["HTML", "CSS", "and JavaScript"],
  },
];

//
function Projects() {
  return (
    <Wrapper>
      <Container>
        <Work>
          <Site></Site>
          <About></About>
        </Work>
      </Container>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.section`
  background: #1a052e;
`;
//

const Container = styled.div``;
//

const Work = styled.div`
  min-height: 80vh;
`;
//

const Site = styled.div``;
//

const About = styled.p``;
//
