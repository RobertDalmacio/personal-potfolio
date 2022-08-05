import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFilCodepenCircle, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';
import { IoNewspaperOutline } from 'react-icons/io5';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size='3rem' /> <Span>Robert Dalmacio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/RobertDalmacio' target='_blank'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com' target='_blank'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://codepen.io/RJDAL' target='_blank'>
      <AiFillCodepenCircle size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
