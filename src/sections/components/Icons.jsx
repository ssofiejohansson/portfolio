import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: center;
  }

`;

const Icon = styled.a`
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

  svg {
    color: inherit;
    transition: color 0.2s;
  }

  &:hover {
    background: var(--secondary);
    color: var(--primary);
  }
`;

export const Icons = () => {
  return (
    <IconContainer>
      <Icon
        href="https://www.linkedin.com/in/ssofiejohansson"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my LinkedIn profile"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <Icon
        href="https://github.com/ssofiejohansson"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub profile"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Download my CV"
      >
        <FontAwesomeIcon icon={faFile} />
      </Icon>
    </IconContainer>
  );
};