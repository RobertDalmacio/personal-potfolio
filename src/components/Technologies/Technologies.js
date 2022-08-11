import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiReact, SiNextdotjs, SiChakraui, SiStyledcomponents, SiBootstrap, SiFigma, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiExpress, SiTypescript, SiNodedotjs, SiFirebase, SiRedux } from "react-icons/si";

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <ListContainer >
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <SiHtml5 size='3rem'/><SiCss3 size='3rem'/> HTML/CSS
          </ListParagraph>
          <ListParagraph>
            <SiJavascript size='3rem'/> JavaScript
          </ListParagraph>
          <ListParagraph>
            <SiTypescript size='3rem'/> TypeScript
          </ListParagraph>
          <ListParagraph>
            <SiReact size='3rem'/> ReactJS
          </ListParagraph>
          <ListParagraph>
            <SiNextdotjs size='3rem'/> Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <SiMongodb size='3rem'/> MongoDB
          </ListParagraph>
          <ListParagraph>
            <SiExpress size='3rem'/> Express
          </ListParagraph>
          <ListParagraph>
            <SiNodedotjs size='3rem'/> Node.js
          </ListParagraph>
          <ListParagraph>
            <SiFirebase size='3rem'/> Google Firebase v9
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            <SiRedux size='3rem'/> Redux
          </ListParagraph>
          <ListParagraph>
            <SiFigma size='3rem'/> Figma
          </ListParagraph>
          <ListParagraph>
            <SiChakraui size='3rem'/> Chakra UI
          </ListParagraph>
          <ListParagraph>
          <ListParagraph>
            <SiBootstrap size='3rem'/> Bootstrap 5
          </ListParagraph>
            <SiStyledcomponents size='3rem'/> Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
