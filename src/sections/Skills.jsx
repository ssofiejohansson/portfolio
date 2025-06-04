import styled from 'styled-components';

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
    }
`

const SkillsList = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  min-height: 100dvh;

  @media (min-width: 768px) {
  padding: 60px;
  width: 50%;
  }
`

const SkillsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
      align-items: flex-start;

    }
`

const ListColumn = styled.ul`
  list-style: none;
  padding: 0;
`

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);  
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100dvh;

  @media (min-width: 768px) {
  width: 50%;
  padding: 60px;
  }
`
const ListRow = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;

  @media (min-width: 768px) {
  padding: 0px 40px;
  max-width: 400px;
  }
`

export const Skills = () => {
  return (

    <SkillsContainer>
      <SkillsList>

        <SkillsRow>
          <h3>Frontend </h3>
          <ListColumn>
            <li>Responsive design</li>
            <li>Styled components</li>
            <li>Web accessibility</li>
            <li>State management</li>
            <li>Debugging</li>
            <li>Performance optimization</li>
            <li>Client-side routing</li>
          </ListColumn>

          <h3>Design & UX</h3>
          <ListColumn>
            <li>UI design</li>
            <li>UX thinking</li>
            <li>Prototyping in Figma</li>
            <li>Accessibility testing tools</li>
            <li>Mobile-first design</li>
            <li>Wireframing</li>

          </ListColumn>
        </SkillsRow>

        <SkillsRow>
          <h3>Workflow</h3>
          <ListColumn>
            <li>Agile development</li>
            <li>Sprint planning</li>
            <li>Code reviews</li>
            <li>Pair & mob programming</li>
            <li>Git/GitHub workflows</li>
            <li><Problem-solving></Problem-solving></li>
          </ListColumn>

          <h3>Soft Skills</h3>
          <ListColumn>
            <li>Detail-oriented</li>
            <li>Communicative</li>
            <li>Adaptable</li>
            <li>Solution-oriented</li>
            <li>Team player</li>

          </ListColumn>
        </SkillsRow>
      </SkillsList>

      <TechStack>
        <h2>Tech stack</h2>
        <ListRow>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Zustand</li>
          <li>Vue</li>
          <li>Angular</li>
          <li>Node.js</li>
          <li>JSON</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>APIs</li>
          <li>npm</li>
          <li>CMS</li>
          <li>Postman</li>

        </ListRow>
      </TechStack>
    </SkillsContainer>
  )
}
