import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import styled from "styled-components";

const IconStyling = styled.div`
  display: flex;
  gap: 20px;
  font-size: 30px;
  padding-top: 20px;

  svg {
    color: ${({ color }) => color}; 
    transition: color 0.3s ease; 
    cursor: pointer;

    &:hover {
      color: var(--complementary);
       transform: scale(1.3); 
    
    }
  }
`;

export const Icons = ({ color }) => {
  return (
    <IconStyling color={color}>
      <a
        href="https://www.linkedin.com/in/ssofiejohansson"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my LinkedIn profile"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://github.com/ssofiejohansson"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub profile"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Download my CV"
      >
        <FontAwesomeIcon icon={faFile} />
      </a>
    </IconStyling>
  );
};