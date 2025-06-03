import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from "react-router-dom";
import styled from "styled-components"

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  padding: 10px;

  @media (min-width: 768px) {
    background: none;
    flex-direction: column;
    width: 80px;
    left: auto;
    align-items: flex-end;
    justify-content: flex-start;
  }
`

const NavRow = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 20px;
    gap: 20px;
  }
`

const NavColumn = styled.div`
    display: flex;
    gap: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
      gap: 20px;
  }
`
const NavItem = styled.a`
  font-size: clamp(16px, 4vw, 72px); 
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--primary);

  &:hover {
    text-decoration: underline;
    text-decoration-style: wavy;
      text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  ${({ active }) =>
    active &&
    `
    text-decoration: underline;
    text-decoration-style: wavy;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
    `
  }
 
  @media (min-width: 768px) {
    writing-mode: ${(props) => (props.vertical ? 'vertical-rl' : 'initial')};
    text-orientation: ${(props) => (props.vertical ? 'mixed' : 'initial')};

      &:hover {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-underline-offset: 6px;
    text-decoration-thickness: 5px;
  }

  ${({ active }) =>
    active &&
    `
    text-decoration: underline;
    text-decoration-style: wavy;
    text-underline-offset: 6px;
    text-decoration-thickness: 5px;
    `
  }
  }
`

const TitleContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0px;
    z-index: 101;
     pointer-events: none;
  }
  
`;

const TopTitle = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
   background: linear-gradient(to bottom, #FFF4B8, #FFC7D3, #F9A8FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin: 2px;

    @media (min-width: 768px) {
     font-size: clamp(14px, 4vw, 72px); 
  }
`;

const BottomTitle = styled.span`
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin: 2px;

  @media (min-width: 768px) {
    font-size: clamp(14px, 4vw, 72px); 
    margin-left: 20px;
  }
`;
const NavIconButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--primary);
  color: var(--secondary);
  border: none;
  cursor: pointer;
  font-size: clamp(16px, 3vw, 52px); 
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  padding: 0;
  width: 1.5em;
  height: 1.5em;
  min-width: 34px;
  min-height: 34px;

  &:hover {
    background: var(--secondary);
    color: var(--primary);
  }

  svg {
    color: inherit;
    transition: color 0.2s;
    width: 1em;
    height: 1em;
  }
`;

const VerticalIcon = styled(FontAwesomeIcon)`
  color: var(--primary);
  transform: none;
  padding: 2px;

  &:hover {
     }

      @media (min-width: 768px) {
        transform: rotate(90deg);
      }
`;

export const Nav = () => {
  const location = useLocation();
  return (
    <NavContainer>
      <NavRow>
        {location.pathname !== "/" && (
          <NavItem
            href="/"
            title="Back to Home"
            active={location.pathname === "/" ? "true" : undefined}
          >
            ←
          </NavItem>
        )}
        <NavItem
          href="/about"
          title="About me"
          active={location.pathname === "/about" ? "true" : undefined}
        >
          About
        </NavItem>
        <NavItem href="/projects" title="See projects" active={location.pathname === "/projects" ? "true" : undefined}>Projects</NavItem>
      </NavRow>
      <NavColumn>
        <NavItem href="/skills" title="My skills" vertical="true" active={location.pathname === "/skills" ? "true" : undefined}>Skills</NavItem>
        <NavItem href="/contact" title="Get in touch" vertical="true" active={location.pathname === "/contact" ? "true" : undefined}>Contact</NavItem>
        <NavIconButton
          href="https://www.linkedin.com/in/ssofiejohansson"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my LinkedIn profile"
        >
          <VerticalIcon icon={faLinkedinIn} />
        </NavIconButton>
      </NavColumn>
      <TitleContainer>
        <TopTitle>Frontend</TopTitle>
        <BottomTitle>Developer</BottomTitle>
      </TitleContainer>
    </NavContainer>
  )
}