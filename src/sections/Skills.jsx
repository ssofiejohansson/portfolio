import styled from 'styled-components';
import { ScrollAnimation } from "./components/ScrollAnimation";



const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 100px 40px;
  justify-content: center;
  align-items: center; 
  text-align: center;


    @media (min-width: 768px) {
   
  
  }
`

const SkillsList = styled.section` 
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  justify-content: center;


  @media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
    }
`

const ListColumn = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListRow = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 800px;
    }
`

const LineItem = styled.hr`
    border: none;

    @media (min-width: 768px) {
    border: 1px solid #E48162;
    }
`

export const Skills = () => {
  return (
    <ScrollAnimation>
      <SkillsContainer id='skills'>
        <h2>Skills</h2>

        <SkillsList>

          <div>
            <h3>Code</h3>
            <ListColumn>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Styled Components</li>
              <li>GitHub</li>
            </ListColumn>

          </div>
          <LineItem></LineItem>
          <div>
            <h3>Toolbox</h3>
            <ListColumn>
              <li>Figma</li>
              <li>Visual Studio</li>
              <li>Canva</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Slack</li>
            </ListColumn>

          </div>
          <LineItem></LineItem>
          <div>
            <h3>More</h3>
            <ListColumn>
              <li>SEO</li>
              <li>UI Design</li>
              <li>UX Design</li>
              <li>Accessibility</li>
              <li>Development</li>
            </ListColumn>

          </div>
          <LineItem></LineItem>
          <div>
            <h3>Upcoming</h3>
            <ListColumn>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ListColumn>
          </div>


        </SkillsList>


        <h2>Tech stack</h2>

        <ListRow className='techStack'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Flexbox</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Node.js</li>
          <li>JSON</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Web Accessibility</li>
          <li>APIs</li>
          <li>Mob-programming</li>
          <li>Pair-programming</li>
          <li>Github</li>
        </ListRow>

      </SkillsContainer>
    </ScrollAnimation>
  )
}
