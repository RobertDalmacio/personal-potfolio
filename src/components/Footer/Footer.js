import React from 'react';
import { AiFillGithub, AiFillCodepenCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/RobertDalmacio' target='_blank'>
            <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com' target='_blank'>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://codepen.io/RJDAL' target='_blank'>
            <AiFillCodepenCircle size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
