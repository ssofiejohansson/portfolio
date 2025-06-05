import styled from "styled-components";
import { Cards } from "./components/Cards";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 30px; 
  padding: 30px 10px;  

  @media (min-width: 768px) {
    flex-direction: row;  
    position: fixed;
    top: 90px;
    left: 90px;
    bottom: 90px;
    right: 90px;
    overflow-y: auto;
    padding: 30px;
    z-index: 10;
  }
`;

const TopBtn = styled.a` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--primary);
    color: var(--secondary);
    border: none;
    cursor: pointer;
    font-size: 22px;
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
    padding: 0;

    &:hover {
        background: var(--secondary);
        color: var(--primary);
    }

     @media (min-width: 768px) {
     display: none;
     }
`

export const Projects = () => {
  return (

    <ProjectsContainer id="top">
      <Cards />
      <TopBtn href="#top" title="Back to top">↑</TopBtn>
    </ProjectsContainer>

  );
};