import React from 'react';
import Carousel from 'better-react-carousel'

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <div align="center" >
      {projects.map(({id, image, title, description, tags, source, visit, subTitle, features}) => (
        <BlogCard key={id} style={{display: 'flex', marginBottom: '40px'}}>
          <div style={{flex: '0 0 50%'}}>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <HeaderThree title>{subTitle}</HeaderThree>
              <Hr />
            </TitleContent>
            <Carousel cols={1} rows={1} gap={10} loop>
              {image.map((image, i) => (
                <Carousel.Item key={i}>
                  <img width='100%' src={image} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div style={{flex: '1', marginBottom: '20px', marginTop: '20px'}}>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList style={{marginTop: '0px'}}>
              <ExternalLinks href={source} target="_blank">Code</ExternalLinks>
              <ExternalLinks href={visit} target="_blank">Demo</ExternalLinks>
            </UtilityList>
            <CardInfo>
              {description}
              <ul style={{marginTop: '10px', marginBottom: '10px'}}>
                {features.map((feature, i) => (
                  <li style={{marginTop: '10px'}}>- {feature}</li>
                ))}
              </ul>
            </CardInfo>
          </div>
        </BlogCard>
      ))}
    </div>
  </Section>
);

export default Projects;