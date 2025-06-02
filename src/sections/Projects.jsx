import { Cards } from "./components/Cards";
import { ScrollAnimation } from "./components/ScrollAnimation";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px; 
  justify-content: center;
  padding: 80px 60px;

  @media (min-width: 768px) {
    column-gap: 60px;
    row-gap: 60px;
  }
`;


export const Projects = () => {
  return (
    <>
      <ScrollAnimation>
        <ProjectsContainer>
          <Cards />
        </ProjectsContainer>
      </ScrollAnimation>
    </>
  );
};