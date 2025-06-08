import styled from 'styled-components';

import profileImage from '../assets/img/footer-img.png';
import { Icons } from './components/Icons';
import { HeaderText, Heading, ProfileImg } from './Header';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`

const FooterImg = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    display: block;
  }
`

const SubHeading = styled.p`
font-size: 20px;
letter-spacing: 1px;
max-width: 90%;
text-align: left;

@media (min-width: 768px) {
max-width: 70%;
text-align: center;
}
`

export const Footer = () => {
  return (

    <FooterContainer>

      <HeaderText>
        <Heading>So let’s talk frontend, creative chaos or... just play table tennis?</Heading>

        <SubHeading>+46 72 442 34 97</SubHeading>
        <SubHeading>ssofiejohansson@gmail.com</SubHeading>
        <Icons />
      </HeaderText>
      <FooterImg>
        <ProfileImg src={profileImage} alt="Sofie Johansson" />
      </FooterImg>
    </FooterContainer>

  )
}
