import React, { useState } from "react";
import styled from "styled-components";
import { keyframes, css } from "styled-components";

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

function Projects() {
  const [isActive, setIsActive] = useState({});
  //
  console.log(isActive);
  const splitToggle = (index) => () => {
    setIsActive((current) => ({ ...current, [index]: !current[index] }));
  };

  return (
    <>
      {sites.map((project, index) => {
        const { live, gitHub } = project.links;
        return (
          <Work>
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
              <Resources>{project.resources.join(" ")}</Resources>
              <AboutPar>{project.about}</AboutPar>

              <Links>
                <LiveSite href={live}>LiveSite</LiveSite>
                <VerBorder></VerBorder>
                <GithubLink href={gitHub}>GithubLink</GithubLink>
              </Links>
            </About>
          </Work>
        );
      })}
    </>
  );
}

export default Projects;
//

const Work = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;

  //   color: white;
`;
//

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

const showAbout = keyframes`
0%{
        height:  1px ;
        "margin-top": 0 ;
        padding: 0; 
    
   
}

40%{
    
        height: 1px;      
        margin-top: -30px ;
        padding: 0;   
}

100%{
   
        height:  250px ;
        "margin-top": -30px;
        padding: 8px 0;
    
}

`;
//

const hideAbout = keyframes`
0%{
    height:  250px;
    margin-top:0px;
    padding: 8px 0;


}

40%{

     height:  1px;
     margin-top: -30px;
     padding: 0;
  
}

100%{

    height: 1px;
    margin-top: 0;
    padding:0;

}

`;
//

const About = styled.div`
  ${(props) => {
    return {
      height: !props.toogle ? "1px" : "250px",
      "margin-top": !props.toogle ? "0" : "-30px",
      padding: !props.toogle ? "0" : "8px 0",
    };
  }};

  width: 100%;
  background: white;
  hyphens: auto;
  text-align: start;
  color: black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
  font-size: 20px;
  animation: ${(props) =>
    props.toogle
      ? css`
          ${hideAbout} 1s linear forwards
        `
      : css`
          ${showAbout} 1s linear forwards
        `};
`;

//

const AboutPar = styled.p`
  margin: calc(3px + 2vw) 0 calc(2px + 1vw) 2vw;
`;

//
const ResourcesDup = styled.p`
  text-align: center;
  color: blue;
  visibility: hidden;
  font-size: 20px;
`;
//

const Resources = styled.p`
  text-align: center;
  font-size: 20px;
`;
//

const Links = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
`;
//

const LiveSite = styled.a`
  width: fit-content;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  margin-left: 2vw;
  background: black;
  color: whitesmoke;
  border: 2px solid whitesmoke;
`;
//

const VerBorder = styled.div``;

const GithubLink = styled(LiveSite)``;
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
