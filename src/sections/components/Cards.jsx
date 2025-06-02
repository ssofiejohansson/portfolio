import ProjectList from '../../assets/data/projects.json';
import styled from 'styled-components';
import { Button } from './Button';
import { Tag } from './Tag';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  flex: 1 1 calc(100% - 40px);
  max-width: 400px;
  box-sizing: border-box;
  min-height: 400px; 

  @media (min-width: 768px) {
    flex: 1 1 calc(50% - 40px); 
  }

  @media (min-width: 1600px) {
    flex: 1 1 calc(25% - 40px); 
  }
`

const ProjectImg = styled.img`
    width: 100%;
    opacity: 0.7;
    border-top: 6px solid #E48162;
    border-left: 6px solid #E48162;

    &:hover {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
  `

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; 
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  `

const ProjectHeading = styled.h2`
  font-family: var(--font-family-headings);
  color: var(--font-primary);
  text-align: left;
  font-size: 30px;
  font-weight: 500;
  `

export const Cards = () => {
  return (
    <>
      {ProjectList.projects.map((project, id) => (

        <CardContainer key={id}>

          <TagContainer>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagContainer>

          <ProjectImg src={project.image} alt={project.alt} />
          <TagContainer>
            <Tag>{project.collab}</Tag>
          </TagContainer>

          <ProjectHeading> {project.name} </ProjectHeading>

          <p>{project.info}</p>

          <ButtonContainer>

            <Button href={project.netlify} target="_blank" rel="noopener noreferrer" buttonText="Live Demo" isPrimary={true} />
            <Button href={project.github} target="_blank" rel="noopener noreferrer" buttonText="View Code" />

          </ButtonContainer>
        </CardContainer >

      ))}
    </>
  )
}