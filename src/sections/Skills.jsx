import styled from 'styled-components';

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;

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
  gap: 40px;
  padding: 20px;
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
  gap: 16px;

  @media (min-width: 768px) {
    gap: 12px;
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
  max-width: 500px;
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
            <li>Component-based architecture</li>
            <li>Client-side routing</li>
          </ListColumn>

          <h3>Design</h3>
          <ListColumn>
            <li>User Experience</li>
            <li>Visual design</li>
            <li>Graphic design</li>
            <li>SEO</li>
            <li>Prototyping in Figma</li>
            <li>Accessibility testing tools</li>
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
            <li>Problem-solving mindset</li>
            <li>Effective communication</li>
            <li>Attention to detail</li>
            <li>Team collaboration</li>
            <li>Time management</li>
            <li>Growth-oriented</li>
            <li>User-centric thinking</li>
          </ListColumn>
        </SkillsRow>
      </SkillsList>

      <TechStack>
        <h2>Tech stack</h2>
        <ListRow>

          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JSON</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
          <li>React Native</li>
          <li>Zustand</li>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
          <li>npm</li>
          <li>Postman</li>
          <li>Figma</li>
          <li>Git & GitHub</li>
          <li>WordPress</li>
          <li>CMS Platforms</li>

        </ListRow>
      </TechStack>
    </SkillsContainer>
  )
}
