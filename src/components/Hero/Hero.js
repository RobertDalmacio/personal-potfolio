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
      <SectionText>
        A previous Automotive Testing Engineer seeking a new oppurtunity as a Full Stack Developer.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;