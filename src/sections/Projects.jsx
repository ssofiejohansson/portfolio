import styled from "styled-components";

import { ButtonBase } from "./components/Button"
import { Cards } from "./components/Cards";

const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px; 
  justify-content: center;
  padding: 60px 10px;

  @media (min-width: 768px) {
  column-gap: 20px;
  padding: 80px 30px;
  }
`;

export const Projects = () => {
  return (
    <ProjectsContainer id="top">
      <Cards />
      <ButtonBase href="#top" title="Back to top">↑</ButtonBase>
    </ProjectsContainer>
  );
};