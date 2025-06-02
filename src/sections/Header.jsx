import profileImage from '../assets/img/header-img.png';
import styled from 'styled-components';
import { Icons } from './components/Icons';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-top: 50px;
  min-height: 100vh;
  background: none;

  @media (max-width: 767px) {
    background: url(${profileImage}) center/cover no-repeat;
    position: relative;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
    background: none;
    padding-top: 0px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    width: 50%;
    background: none;
    border-radius: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`
export const Title = styled.h2`
font-size: 35px;
margin: 0;
font-style: italic;
`

const Bio = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  margin: 0;

   @media (min-width: 768px) {
    flex-direction: column;
    width: 60%;
  }
`

const HeaderImg = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 50%;
    display: block;
  }
`

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;

  display: block;
  margin: 0 auto;

  @media (min-width: 768px) {
     width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  }
`

export const Header = () => {
  return (

    <HeaderContainer>

      <HeaderText>

        <Title>Sofie Johansson</Title>

        <Bio>
          <p>For the past decade I’ve worked in hospitality, lived in 10 different cities and soaked up all I could from life, cultures and people. But I’ve always been curious about tech and I finally decided to stop dreaming about it and just go for it.
          </p><p>
            So now I’m deep into JavaScript, React and building very cool things at Technigo — and honestly, I’m loving it. I’m looking for a frontend role where I can keep growing, build more cool stuff and bring some positive energy to a team. </p>
        </Bio>
        <Icons color="var(--primary)" />
      </HeaderText>
      <HeaderImg>
        <ProfileImg src={profileImage} alt="Profile image" /></HeaderImg>

    </HeaderContainer >

  );
};
