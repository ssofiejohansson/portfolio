// import ProjectList from '../../assets/data/projects.json';
import styled from 'styled-components';
import { Button } from './Button';
import { Tag } from './Tag';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;

  width: 100%;
  max-width: 100%;
  height: 80vh;
  outline: 1px solid black;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  justify-content: flex-start;

  @media (min-width: 768px) {
    min-width: 150px;
    height: 80vh;
  }
`

const ProjectImg = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 100px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; 
`

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 5px;
  `

const ProjectHeading = styled.h2`
  margin: 0; 
  font-family: var(--font-family-headings);
  color: var(--font-primary);
  text-align: left;
  font-size: 30px;
  font-weight: 500;

  `

const ProjectText = styled.p`
  margin: 0;
  `

// export const Card = () => {
//   return (
//     <>
//       {ProjectList.projects.map((project, id) => (

//         <CardContainer key={id}>

//           <TagContainer>
//             {project.tags.map((tag, index) => (
//               <Tag key={index}>{tag}</Tag>
//             ))}
//           </TagContainer>

//           <ProjectImg src={project.image} alt={project.alt} />
//           <TagContainer>
//             <Tag>{project.collab}</Tag>
//           </TagContainer>

//           <ProjectHeading> {project.name} </ProjectHeading>

//           <ProjectText>{project.info}</ProjectText>

//           <ButtonContainer>

//             <Button href={project.netlify} target="_blank" rel="noopener noreferrer" buttonText="Live Demo" isPrimary={true} />
//             <Button href={project.github} target="_blank" rel="noopener noreferrer" buttonText="View Code" />

//           </ButtonContainer>
//         </CardContainer >

//       ))}
//     </>
//   )
// }

export const Card = ({ singleProject }) => {
  const project = singleProject;
  return (
    <CardContainer>
      <TagContainer>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
      {/* <ProjectImg src={project.image} alt={project.alt} /> */}
      <TagContainer>
        <Tag>{project.collab}</Tag>
      </TagContainer>
      <ProjectHeading> {project.name} </ProjectHeading>
      <ProjectText>{project.info}</ProjectText>
      <ButtonContainer>
        <Button href={project.netlify} target="_blank" rel="noopener noreferrer" buttonText="Live Demo" isPrimary={true} />
        <Button href={project.github} target="_blank" rel="noopener noreferrer" buttonText="View Code" />
      </ButtonContainer>
    </CardContainer>
  );
};