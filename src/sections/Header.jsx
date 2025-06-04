import styled from 'styled-components';

import profileImage from '../assets/img/header-img.png';
import { Icons } from './components/Icons';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column-reverse; 

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 28px;
  width: 100%;
  padding: 40px 20px;
  height: 100dvh;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 22px;
    
  }
`
export const Heading = styled.h2`
font-size: 30px;
font-style: italic;
max-width: 90%;
text-align: left;

@media (min-width: 768px) {
max-width: 70%;
text-align: center;
}
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 22px;

   @media (min-width: 768px) {
    width: 70%;
  }
`

export const HeaderImg = styled.div`
  width: 100%;
  height: 100dvh;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  object-position: center center;
  

  @media (min-width: 768px) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  margin: 0 auto;

  }
`

export const Header = () => {
  return (

    <HeaderContainer>

      <HeaderText>

        <Heading>Is this a good time? Yes? Great.</Heading>
        <Bio>
          <p>I'm Sofie, a frontend developer with a love for colors, clean code and CSS (yes, really). For the past decade I’ve worked in hospitality, lived in 10 different cities and soaked up all I could from life, cultures and people. But I’ve always been curious about tech and I finally decided to stop dreaming about it and just go for it.
          </p><p>
            So now I’m deep into JavaScript, React and building very cool things at <a href='https://www.technigo.io/'>Technigo</a> — and honestly, I’m loving it. I’m looking for a frontend role where I can keep growing, build more cool stuff and bring some positive energy to a team. </p>
        </Bio>
        <Icons color="var(--primary)" />
      </HeaderText>
      <HeaderImg>
        <ProfileImg src={profileImage} alt="Profile image" /></HeaderImg>

    </HeaderContainer >

  );
};
