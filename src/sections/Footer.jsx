import profileImage from '../assets/img/footer-img.png';
import styled from 'styled-components';
import { Icons } from './components/Icons';
import { ProfileImg, Title } from './Header';


const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-top: 50px;
  min-height: 100vh;

  @media (max-width: 767px) {
    background: url(${profileImage}) center/cover no-repeat;
    position: relative;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
    padding-top: 0px;
    background: none;
  }
`

const FooterBio = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;


  @media (min-width: 768px) {
    width: 50%;
  }
  `

const FooterImg = styled.div`
  width: 100%;
  margin: 0;

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
        <Icons color="var(--primary)" />
      </FooterBio>
      <FooterImg>
        <ProfileImg src={profileImage} alt="Profile image" />
      </FooterImg>
    </FooterContainer>

  )
}
