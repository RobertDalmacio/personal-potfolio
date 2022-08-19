import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Hi, My Name is<br />
        Robert Dalmacio
      </SectionTitle>
      <SectionTitle>
        Full Stack Developer
      </SectionTitle>
      <Button onClick={() => window.open('https://linkedin.com/in/robertdalmacio', '_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;