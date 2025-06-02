import styled from "styled-components"

const NavContainer = styled.nav`
  position: sticky;
  top: 0; 
  z-index: 1000;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-evenly;
  align-items: center;
  border: 4px solid #E48162;
  background-color: var(--secondary);
  width: 100%;

   @media (min-width: 768px) {
        justify-content: space-evently;
      }
`

const NavItem = styled.a`
  text-decoration: none;
  padding: 2px;
  cursor: pointer;
  color: var(--primary);
  font-family: var(--font-family-headings);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 18px;
          letter-spacing: 3px;
      }
  &:hover {
   border-bottom: 4px solid var(--primary);
    transition: all 0.1s ease-in-out;
  }

`

export const Nav = () => {
  return (
    <>
      <NavContainer>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavContainer>
    </>
  )
}
