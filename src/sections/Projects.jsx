import styled from "styled-components";

import { Cards } from "./components/Cards";


const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px; 
  justify-content: center;
  padding: 30px 10px;
  

  @media (min-width: 768px) {
    position: fixed;
    top: 80px;
    left: 80px;
    bottom: 80px;
    right: 80px;
    overflow-y: auto;
    padding: 30px;
    z-index: 10;
  }


`;



export const Projects = () => {
  return (
    <ProjectsContainer id="top">
      <Cards />
      {/* <ButtonBase href="#top" title="Back to top">↑</ButtonBase> */}
    </ProjectsContainer>
  );
};