import { Card } from "./components/Card";
import ProjectList from '../assets/data/projects.json';
// import { ScrollAnimation } from "./components/ScrollAnimation";
import styled from "styled-components";

const ProjectsCarousel = styled.section`

  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;
  min-height: 100vh;
  scrollbar-width: thin;
padding-left: 50px;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);  
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

const CarouselItem = styled.div`

  flex: 0 0 80vw;
  max-width: 80vw;
  scroll-snap-align: start;




  @media (min-width: 768px) {
    flex: 0 0 50vw;
    max-width: 50vw;
   
  }
`;

export const Projects = () => {
  return (

    <ProjectsCarousel>
      {ProjectList.projects.map((project, idx) => (
        <CarouselItem key={idx}>

          <Card singleProject={project} />
        </CarouselItem>
      ))}
    </ProjectsCarousel>

  );
};