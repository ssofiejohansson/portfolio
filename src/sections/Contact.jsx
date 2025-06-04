import styled from 'styled-components';

import profileImage from '../assets/img/footer-img.png';
import { Icons } from './components/Icons';
import { ProfileImg, Title } from './Header';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  @media (max-width: 767px) {
    background: url(${profileImage}) center/cover no-repeat;
    position: relative;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
    background: none;
  }
`

const FooterBio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0px;
  }
  `

const FooterImg = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 50%;
    display: block;
  }
`

export const Footer = () => {
  return (

    <FooterContainer>

      <FooterBio>
        <Title>Let's Talk!</Title>
        <p>+46(0)72 442 34 97</p>
        <p>ssofiejohansson@gmail.com</p>
        <Icons />
      </FooterBio>
      <FooterImg>
        <ProfileImg src={profileImage} alt="Sofie Johansson" />
      </FooterImg>
    </FooterContainer>

  )
}
