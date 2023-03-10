import HeadingSecondary from "../../typography/heading-secondary/heading-secondary.component";
import {
  AboutSectionContainer,
  AboutMeHeading,
  AboutMe,
  SkillContainer,
  List,
  ListItem,
  Content,
  TitleContainer,
  Circles,
  Stairs,
  Raster,
  HorizontalStairs,
  ShapesContainer,
  Ref,
} from "./aboutsection.styles";
import { Paragraph } from "../../typography/paragraph/paragraph.styles";
import raster from "../../../assets/img/raster.svg";
import stairs from "../../../assets/img/stairs.svg";
import circles from "../../../assets/img/circles.svg";

const technologiesList = [
  "HTML / CSS (Sass)",
  "Tailwind",
  "React",
  "Javascript",
  "React Native",
  "Typescript",
  "Node / Express",
  "MongoDB",
  "Firebase",
  "Figma",
  "Git",
];

const AboutSection = () => (
  <AboutSectionContainer id='about'>
    <ShapesContainer>
      <Content>
        <TitleContainer>
          <HeadingSecondary headingText={"All About Me"} />
          <Paragraph>
            Hi, my name is Maurice! I am solution oriented and have a positive and curious mindset.
            I enjoy doing sports, partying (I'm also learning how to DJ), I have a love for gadgets
            and anything that is electronic.
          </Paragraph>
          <Paragraph>
            I have worked as lead developer and co-owner for the startup
            <Ref href='https://cstm-development.nl/' target='_blank'>
              &nbsp;CSTM&nbsp;
            </Ref>
            and now work as a front-end developer at
            <Ref href='https://www.foleon.com/' target='_blank'>
              &nbsp;Foleon.&nbsp;
            </Ref>
            Besides work projects I have my own projects going that I use to learn new technologies.
          </Paragraph>
        </TitleContainer>

        <AboutMe>
          <AboutMeHeading>Developing, designing, creating.</AboutMeHeading>
          <Paragraph>
            Being able to build whatever I want on the web is what excites me. I have the most fun
            with developing a design (UI) and to see it coming to life. When I build JavaScript
            driven applications I pay attention to the details to deliver just the right user
            experience (UX).
          </Paragraph>
          <SkillContainer>
            <div>
              <Paragraph>An overview of techniques I use for my projects:</Paragraph>
              <List>
                {technologiesList.map((j) => (
                  <ListItem key={j}>{j}</ListItem>
                ))}
              </List>
            </div>
          </SkillContainer>
        </AboutMe>
      </Content>
      <Circles className='boi' pattern={circles} />
      <Stairs pattern={stairs} />
      <Raster pattern={raster} />
      <HorizontalStairs pattern={stairs} />
    </ShapesContainer>
  </AboutSectionContainer>
);

export default AboutSection;
