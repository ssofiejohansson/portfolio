import { Cards } from "./components/Cards";
import { ScrollAnimation } from "./components/ScrollAnimation";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px; 
  justify-content: flex-start;
  padding: 50px 10px;

  @media (min-width: 768px) {
    column-gap: 60px;
    row-gap: 80px;
  }
`;


export const Projects = () => {
  return (
    <>
      <ScrollAnimation>
        <h2 id="projects">Featured Projects</h2>
        <ProjectsContainer>
          <Cards />
        </ProjectsContainer>
      </ScrollAnimation>
    </>
  );
};