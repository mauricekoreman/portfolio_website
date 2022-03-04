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
  Image,
  Square,
  Circle,
  Triangle,
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
        <HeadingSecondary topText={"About"} headingText={"All About Me"} />
        <Paragraph style={{ marginTop: "1rem" }}>
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
          <Paragraph>Some technologies i use form my work</Paragraph>
          <List>
            {technologiesList.map((j) => (
              <ListItem key={j}>{j}</ListItem>
            ))}
          </List>
        </SkillContainer>
      </AboutMe>
    </Content>
    <Image>
      <Square />
      <Circle />
      <Triangle />
    </Image>
  </AboutSectionContainer>
);

export default AboutSection;
