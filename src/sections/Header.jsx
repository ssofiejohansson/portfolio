import React from 'react';
import profileImage from '../assets/img/header-img.png';
import styled from 'styled-components';
import { Icons } from './components/Icons';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 20px;
  padding-top: 100px; 

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
    justify-content: center;
    align-items: center;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
`;

const HeaderIntro = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  @media (min-width: 768px) {
    max-width: 500px;
    gap: 10px;
  }
`;

const HeaderBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
  }
`;

export const ProfileImg = styled.img`
  width: 250px;
  height: 260px;
  border-radius: 50%;
  margin-top: 20px;
  padding: 10px;

  @media (min-width: 768px) {
    width: 300px;
    height: 310px;
    margin-top: 0px;
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer id="about">
        <HeaderTitle>
          <h1>Frontend Developer</h1>
          <h2>+ former hospitality pro</h2>
        </HeaderTitle>
        <HeaderBio>
          <HeaderIntro>
            <h3>Hi, I'm Sofie</h3>
            <p>
              For the past decade I’ve worked in hospitality, lived in 10 different cities and soaked up all I could from life, cultures and people. But I’ve always been curious about tech and I finally decided to stop dreaming about it and just go for it.
              So now I’m deep into JavaScript, React and building very cool things at Technigo — and honestly, I’m loving it. I’m looking for a frontend role where I can keep growing, build more cool stuff and bring some positive energy to a team.
            </p>
            <Icons color="var(--primary)" />
          </HeaderIntro>
          <ProfileImg src={profileImage} alt="Profile image" />
        </HeaderBio>
      </HeaderContainer>
    </>
  );
};
