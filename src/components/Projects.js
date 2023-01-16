import React, { useContext, useState } from "react";
import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { device } from "./Device";
import { sites } from "./ProjectsData";
import { CursorContext } from "./providers/CursorContextProvider";
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

  const { setCursorType } = useContext(CursorContext);
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

  const handleMouseEnter = () => {
    console.log("first");
    setCursorType("work");
  };
  const handleMouseLeave = () => {
    setCursorType("");
  };

  return (
    <>
      {sites.map((project, index) => {
        /**
         * Destructuring the links in (Sites)
         */
        const { live, gitHub, figma } = project.links;
        return (
          <Work>
            <SiteImage
              className={"image" + project.name}
              toogle={isActive}
              background={project.image}
              onClick={splitToggle(index)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Mask></Mask>
              <ProjTitle>{project.name}</ProjTitle>
              <ResourcesDup toogle={isActive[index]}>
                {project.resources.join(" ")}
              </ResourcesDup>
            </SiteImage>
            {/*  */}

            <About className={"about-" + project.name} toogle={isActive[index]}>
              <Resources>{project.resources.join(" ")}</Resources>
              <AboutPar>{project.about}</AboutPar>

              <Links>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "10px",
                  }}
                >
                  <Site href={live}>LiveSite</Site>
                  {figma && (
                    <Site className="figma" href={figma}>
                      FigmaLink
                    </Site>
                  )}
                </div>
                <VerBorder></VerBorder>
                <Site href={gitHub}>GitHubLink</Site>
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
  background: radial-gradient(white 10%, #ffcc99 75%, chocolate 85%);
  border-radius: 30px;
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  filter: blur(9px);
  box-shadow: 0 0 1px rgba(203, 145, 84, 0.6);
  will-change: transform;
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

        max-height: 400px;
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
  display: ${(props) => (props.toogle ? "none" : "block")};
`;

const ProjTitle = styled(ResourcesDup)`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
`;
//

const Resources = styled.p`
  text-align: center;
  font-size: 18px;
`;
//

const Links = styled.div`
  margin-top: 10px;
  margin-bottom: 2px;
  text-align: start;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    margin-top: 10px;
  }
`;
//

const Site = styled.a`
  width: fit-content;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  margin-left: 2vw;
  background: black;
  color: whitesmoke;
  border: 2px solid whitesmoke;

  &.figma {
    margin-left: 15px;
  }
`;
//

const VerBorder = styled.div``;
//

const SiteImage = styled.div`
  background: url(${(props) => props.background}) no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  border-radius: 10px;
  width: 80vw;
  aspect-ratio: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 1.2px 1px rgba(203, 145, 84, 0.6);

  @media ${device.mobileM} {
    border-radius: 30px;
    width: 65vw;
  }
  @media ${device.mobileL} {
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
    opacity: 0.9;
  }
  &:hover ${Mask},&:hover > ${ResourcesDup}, &:hover ${Resources} {
    visibility: visible;
  }
`;
