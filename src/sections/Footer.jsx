import profileImage from '../assets/img/footer-img.png';
import styled from 'styled-components';
import { Icons } from './components/Icons';
import { ProfileImg } from './Header';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column-reverse;
  
    justify-content: center;
    align-items: center;
    padding: 60px 60px; 
    background: #C35132;
    color: #FFF;
    height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
   
  }
`

const FooterBio = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  gap: 2px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
  `

const FooterHeading = styled.h2`
  color: var(--secondary);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Mynerve';
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -5.76px;
  padding-top: 50px;

  @media (min-width: 768px) {
    font-size: 70px;
    padding-top: 0px;
  }
`

export const Footer = () => {
  return (
    <>
      <FooterContainer id='contact'>
        <ProfileImg src={profileImage} alt="Profile image" />
        <FooterBio>
          <FooterHeading>Let's Talk!</FooterHeading>
          <p>Sofie Johansson</p>
          <p>+46(0)72 442 34 97</p>
          <p>ssofiejohansson@gmail.com</p>
          <Icons color="var(--secondary)" />
        </FooterBio>
      </FooterContainer>
    </>
  )
}
