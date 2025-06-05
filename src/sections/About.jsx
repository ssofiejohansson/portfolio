import styled from 'styled-components';

import { Icons } from './components/Icons';
import { Bio, HeaderText, Heading } from "./Header"

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`

const FactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100dvh;
  padding: 20px; 
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);  
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (min-width: 768px) {
    width: 50%;
    align-items: center;
    padding: 30px; 
  }
`

const FactList = styled.ul` 
  list-style: none;
  padding: 0;
  max-width: 100%;

  @media (min-width: 768px) {
   max-width: 80%;
  }
`

const ListItem = styled.li`
  padding: 5px;
`

export const About = () => {
  return (
    <AboutContainer>
      <HeaderText>
        <Heading>A little about me</Heading>
        <Bio>
          <p> A creative frontend developer with a background in hospitality and a thing for clean, pretty and user-friendly web experiences. After 10+ years of working with people and fast-paced teams, I'm diving into this new chapter all about code, creativity and continuous learning.</p>
          <p>I also hold a Higher Education Diploma in Informatics, where I explored everything from UX and web design to backend fundamentals like databases and CMS platforms. Along the way, I've built responsive WordPress sites, collaborated with designers and fully embraced my obsession with CSS (yes, still love it). </p>
          <p>When I'm not in front of my computer, you'll find me hunting for second-hand treasures, attempting (and mostly failing) to master crochet or rediscovering Stockholm with fresh eyes after a decade away.</p>
        </Bio>

      </HeaderText>
      <FactsContainer>
        <Heading>
          6 super random facts
        </Heading>
        <FactList>
          <ListItem>🏓 I don't mean to brag, but I'm really good at table tennis.</ListItem>
          <ListItem>🎶 Over 450 concerts attended and still counting.</ListItem>
          <ListItem>🌍 Lived in 10 cities across 4 countries in the last decade.</ListItem>
          <ListItem>🚲 Can't ride a bike, but I'm great at falling down gracefully.</ListItem>
          <ListItem>🍷 I choose wine by its label. The brighter, the better.</ListItem>
          <ListItem>📚 Currently on a mission to read 52 books this year.</ListItem>
        </FactList>

      </FactsContainer>
    </AboutContainer >
  )
}