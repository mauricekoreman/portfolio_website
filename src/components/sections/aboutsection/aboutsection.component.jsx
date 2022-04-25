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
  "ReactJS",
  "Javascript",
  "React Native",
  "Adobe XD",
  "Node / Express",
  "Wordpress",
  "MongoDB",
  "Git",
  "Firebase",
];

const AboutSection = () => (
  <AboutSectionContainer id="about">
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
            I have worked on designing and developing an app for the startup
            <Ref href="https://onetwomodel.com/" target="_blank">
              &nbsp;OneTwoModel&nbsp;
            </Ref>
            and now work as the lead developer and co-owner for
            <Ref href="https://cstm-development.nl/" target="_blank">
              &nbsp;CSTM
            </Ref>
            .
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
      <Circles className="boi" pattern={circles} />
      <Stairs pattern={stairs} />
      <Raster pattern={raster} />
      <HorizontalStairs pattern={stairs} />
    </ShapesContainer>
  </AboutSectionContainer>
);

export default AboutSection;
