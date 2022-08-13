import React, { useState } from "react";
import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { device } from "./Device";
//

/**
 * Data Containing information on all the projects
 */
const sites = [
  {
    name: "finsweet",
    image: require("../images/finsweet.png"),
    links: {
      live: "https://ldrex1.github.io/mechanic/",
      gitHub: "https://github.com/LDrex1/mechanic",
    },
    about:
      "A multipaged website on an automobile repair company based on an existing figma design. All pages are fully responsive.",
    resources: ["HTML", "and CSS"],
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
    name: "getMyPosts",
    image: require("../images/getmyposts.png"),
    links: {
      live: "https://ldrex1.github.io/posts_from_API/",
      gitHub: "https://github.com/LDrex1/posts_from_API",
    },
    about: `A webApp where you can check, update, delete and view posts, similar to a social media website. Data was gotten from "yourplaceholder API".
       All pages are fully responsive.`,
    resources: ["HTML", "CSS", "and JavaScript"],
  },
  {
    name: "Utopia",
    image: require("../images/utopia.png"),
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

/**
 *
 * @returns a fragment that is the result of mapping the "sites AoO"..
 *
 */
function Projects() {
  /**
   * UseState fot the "splitToggle" button
   */
  const [isActive, setIsActive] = useState({});
  //
  console.log(isActive);
  /**
   *
   * @param {*} index
   * @returns the opposite value of the curretn (isActive) based on the index of the element
   */
  const splitToggle = (index) => () => {
    setIsActive((current) => ({ ...current, [index]: !current[index] }));
  };

  return (
    <>
      {sites.map((project, index) => {
        /**
         * Destructuring the links in (Sites)
         */
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
            {/*  */}

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

/** Styles for all the Classes */
const Work = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid white;
  padding: 15px 0 15px 8px;

  @media ${device.mobileL} {
    padding: 0;
    padding-left: 8px;
    min-height: 100vh;
    flex-direction: row;
  }
`;
//

const Mask = styled.div`
  background: #4d4d4d;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  mix-blend-mode: multiply;
  visibility: hidden;
  filter: blur(10px);
`;
//

/**Animation to show the the "About" Class */
const showAbout = (marginDir) => keyframes`
0%{
  flex:0;
        max-height: 1px;
        ${marginDir}: 0;
        padding: 0; 
}

40%{
        max-height: 1px;      
        ${marginDir}: -30px;
        padding: 0;   
}

100%{
  flex:1;

        max-height: 300px;
        ${marginDir}: -30px;
        padding: 8px 0;
}


`;
//

/**Animation to hide the the "About" Class */

const hideAbout = (marginDir) => keyframes`
0%{
    max-height:  400px;
   ${marginDir}:-30px;
    padding: 8px 0;
}

40%{
     max-height:  1px;
     ${marginDir}: -30px;
     padding: 0;
}

100%{
  flex:0;
    max-height: 1px;
    ${marginDir}: 0;
    padding:0;

}

`;
//

/**
 * Animation for the site image
 */
const shrinkImage = keyframes`
  0%{
    flex: 0.5;
  }
  40%{

  }
  100%{
    flex: 0.9
  }
 `;
const increaseImage = keyframes`
 0%{
   flex: 0.9;
 }
 40%{
    
}
 100%{
   flex: 0.5;
 }
`;

const About = styled.div`
  border-left: 5px solid #b35900;
  width: 100%;
  background: linear-gradient(#ffb566, #ffcc99);
  hyphens: auto;
  text-align: start;
  color: #b35900;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
  font-size: 20px;
  animation: ${(props) =>
    props.toogle
      ? css`
          ${showAbout("margin-top")} 1s linear forwards
        `
      : css`
          ${hideAbout("margin-top")} 1s linear forwards
        `};
  // position: relative;

  @media ${device.mobileL} {
    flex: 1;
    animation: ${(props) =>
      props.toogle
        ? css`
            ${showAbout("margin-left")} 1s linear forwards
          `
        : css`
            ${hideAbout("margin-left")} 1s linear forwards
          `};
  }
`;
//

const AboutPar = styled.p`
  margin: calc(3px + 2vw) 0 calc(2px + 1vw) 2vw;
`;

//
const ResourcesDup = styled.p`
  text-align: center;
  color: #e67700;
  visibility: hidden;
  font-size: 20px;
  z-index: 2;
`;
//

const Resources = styled.p`
  text-align: center;
  font-size: 18px;
`;
//

const Links = styled.div`
  margin-top: auto;
  margin-bottom: 2px;
  text-align: start;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    margin-top: 10px;
  }
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
  background: url(${(props) => props.background}) no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  width: 80vw;
  aspect-ratio: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
  // outline: 1px solid transparent;
  //

  @media ${device.mobileM} {
    width: 65vw;
  }
  @media ${device.mobileL} {
    // flex: 0.9;
    // max-width: 85vh;
    max-height: 85vh;
    animation: ${(props) =>
      props.toogle
        ? css`
            ${shrinkImage} 1s linear forwards
          `
        : css`
            ${increaseImage} 1s linear forwards
          `};
    aspect-ratio: 1;
  }
  &:hover {
    // filter: blur(4px);
    opacity: 0.9;
  }
  &:hover ${Mask},&:hover > ${ResourcesDup}, &:hover ${Resources} {
    visibility: visible;
  }
`;
