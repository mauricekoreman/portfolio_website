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
} from "./aboutsection.styles";
import { Paragraph } from "../../typography/paragraph/paragraph.styles";

const technologiesList = [
  "JavaScript",
  "Adobe XD",
  "ReactJS",
  "React Native",
  "HTML/CSS/Sass",
  "Wordpress",
  "Firebase",
];

const AboutSection = () => (
  <AboutSectionContainer id="about">
    <Content>
      <TitleContainer>
        <HeadingSecondary headingText={"All About Me"} />
        <Paragraph>
          My aspiration to live creativity and meet people’s actual needs when it comes to media
          consumption led me to complete my Bachelor’s in Graphic Design.
        </Paragraph>
      </TitleContainer>

      <AboutMe>
        <AboutMeHeading>UX & Development</AboutMeHeading>
        <Paragraph>
          My aspiration to live creativity and meet people’s actual needs when it comes to media
          consumption led me to complete my Bachelor’s in Graphic Design.
        </Paragraph>
        <Paragraph>
          My aspiration to live creativity and meet people’s actual needs when it comes to media
          consumption led me to complete my Bachelor’s in Graphic Design consumption led me to
          complete my Bachelor’s in consumption led me to complete my Bachelor’s in
        </Paragraph>
        <SkillContainer>
          <div>
            <Paragraph>Some technologies i use for my work</Paragraph>
            <List>
              {technologiesList.map((j) => (
                <ListItem key={j}>{j}</ListItem>
              ))}
            </List>
          </div>
        </SkillContainer>
      </AboutMe>
    </Content>
  </AboutSectionContainer>
);

export default AboutSection;
