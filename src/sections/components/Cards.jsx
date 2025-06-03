import { faCode, faGlobe, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectList from '../../assets/data/projects.json';
import { Button } from './Button';
import { ScrollAnimation } from "./ScrollAnimation";
import { Tag } from './Tag';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  flex: 1 1 calc(100% - 40px);
  max-width: 450px;
  box-sizing: border-box;
  min-height: 200px; 
    background-color: var(--secondary);

  @media (min-width: 768px) {
    flex: 1 1 calc(50% - 40px); 
  }

  @media (min-width: 1600px) {
    flex: 1 1 calc(25% - 40px); 
  }
`



const Container = styled.div`
  display: flex;
  `

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 5px; 
`

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
  font-style: italic;
  font-size: 14px;
  `

const ProjectHeading = styled.h2`
  font-size: 38px;
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  `

const ProjectText = styled.p`
  padding: 2px;
  `

const PopupOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30,30,30,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const PopupImg = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
`;

export const Cards = () => {
  const [popupProject, setPopupProject] = useState(null);

  return (
    <>
      {ProjectList.projects.map((project, id) => (
        <ScrollAnimation key={id}>
          <CardContainer>
            <ProjectHeading>{project.name}</ProjectHeading>
            <div>
              <Container>
                <ProjectText>{project.info}</ProjectText>
                <ButtonContainer>
                  <Button
                    href={project.netlify}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FontAwesomeIcon icon={faGlobe} />}
                    aria-label="Visit Project"
                  />
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FontAwesomeIcon icon={faCode} />}
                    aria-label="View Code"
                  />
                  <Button
                    as="button"
                    type="button"
                    onClick={() => setPopupProject(project)}
                    icon={<FontAwesomeIcon icon={faImage} />}
                    aria-label="PopUp Demo"
                  />
                </ButtonContainer>
              </Container>
            </div>
            <TagContainer>
              <p> This was a</p> <p>{project.collab}</p>
              <p>with focus on:</p>  {project.tags.map((tag, index) => (
                <p key={index}>{tag},</p>
              ))}
            </TagContainer>
          </CardContainer>
        </ScrollAnimation>
      ))}

      {popupProject && (
        <PopupOverlay onClick={() => setPopupProject(null)}>
          <PopupImg
            src={popupProject.image}
            alt={popupProject.alt}
            onClick={e => e.stopPropagation()}
          />
        </PopupOverlay>
      )}
    </>
  );
};