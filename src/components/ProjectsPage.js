import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

//
const sites = [
  {
    name: "finsweet",
    image: require("../images/cfuf.png"),
    links: {
      live: "https://ldrex1.github.io/CSUF/",
      gitHub: "https://github.com/LDrex1/CSUF",
    },
    about:
      "A multipage website on an automobile repair company. All pages are fully responsive.",
    resources: ["HTML", "and CSS"],
  },
  {
    name: "mY-mInD",
    image: require("../images/cfuf.png"),
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
    image: require("../images/cfuf.png"),
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
    image: require("../images/cfuf.png"),
    links: {
      live: "https://ldrex1.github.io/countriesInfo/",
      gitHub: "https://github.com/LDrex1/countriesInfo",
    },
    about: `A two-paged webApp that shows all the countries of the world and their main data.
    Data is gotten from the "countries rest API".
     All pages are fully responsive.`,
    resources: ["HTML", "CSS", "and JavaScript"],
  },
];

//
function ProjectsPage() {
  const [isActive, setIsActive] = useState({});
  //
  console.log(isActive);
  const splitToggle = (index) => () => {
    setIsActive((current) => ({ ...current, [index]: !current[index] }));
  };

  //
  return (
    <Wrapper>
      <Container>
        {sites.map((project, index) => (
          <Work>
            {/* <Div> */}
            <SiteImage
              className={"image" + project.name}
              toogle={isActive}
              background={project.image}
              onClick={splitToggle(index)}
            >
              <Mask toogle={isActive}></Mask>
              <ResourcesDup>{project.resources.join(" ")}</ResourcesDup>
            </SiteImage>
            <About className={"about-" + project.name} toogle={isActive[index]}>
              <p>{project.about}</p>
              <Resources>{project.resources.join(" ")}</Resources>
            </About>
            {/* </Div> */}
          </Work>
        ))}
      </Container>
    </Wrapper>
  );
}

export default ProjectsPage;

const Wrapper = styled.section`
  background: #1a052e;
  display: flex;
  justify-content: center;
`;
//

const Container = styled.div``;
//

const Work = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //   color: white;
`;
//

// const Div = styled.div`
//   //   position: relative;
//   hyphens: auto;
// `;

const Mask = styled.div`
  background: grey;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  mix-blend-mode: multiply;
  visibility: hidden;
`;
//

const About = styled.div`
  ${(props) => {
    return {
      height: !props.toogle ? "1px" : "auto",
      "margin-top": !props.toogle ? "0" : "-10px",
      padding: !props.toogle ? "0" : "8px 0",
    };
  }};

  background: white;
  hyphens: auto;
  text-align: center;
  color: red;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
`;
//

//
const ResourcesDup = styled.p`
  text-align: center;
  color: blue;
  visibility: hidden;
`;

const Resources = styled.p`
  //   visibility: hidden;
`;

//

const SiteImage = styled.div`
  background: url(${(props) => props.background}) no-repeat center/cover;
  width: calc(80vw);
  height: calc(80vw);
  //   margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  //

  &:hover ${Mask},&:hover > ${ResourcesDup}, &:hover ${Resources} {
    visibility: visible;
  }
`;
//
