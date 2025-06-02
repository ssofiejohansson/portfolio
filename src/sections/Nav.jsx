import styled from "styled-components"

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
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
  
 
  @media (min-width: 768px) {

    writing-mode: ${(props) => (props.vertical ? 'vertical-rl' : 'initial')};
    text-orientation: ${(props) => (props.vertical ? 'mixed' : 'initial')};
 
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
  }
  
`;

const TopTitle = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 18px;
  font-weight: 800;
 
  text-decoration: none;
  text-transform: uppercase;
  color: var(--primary);
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
  color: var(--primary);
  margin: 2px;

   @media (min-width: 768px) {
     font-size: clamp(14px, 4vw, 72px); 
      margin-left: 20px;
  }
`;

export const Nav = () => {
  return (
    <NavContainer>
      <NavRow>
        <NavItem href="/">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </NavRow>
      <NavColumn>
        <NavItem href="/skills" vertical>Skills</NavItem>
        <NavItem href="/contact" vertical>Contact</NavItem>
      </NavColumn>
      <TitleContainer>
        <TopTitle>Frontend</TopTitle>
        <BottomTitle>Developer</BottomTitle>
      </TitleContainer>
    </NavContainer>
  )
}