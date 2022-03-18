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
} from "./aboutsection.styles";
import { Paragraph } from "../../typography/paragraph/paragraph.styles";
import raster from "../../../assets/img/raster.svg";
import stairs from "../../../assets/img/stairs.svg";
import circles from "../../../assets/img/circles.svg";

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
    <ShapesContainer>
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
      <Circles className="boi" pattern={circles} />
      <Stairs pattern={stairs} />
      <Raster pattern={raster} />
      <HorizontalStairs pattern={stairs} />
    </ShapesContainer>
    {/* <ShapesContainer> */}
    {/* </ShapesContainer> */}
  </AboutSectionContainer>
);

export default AboutSection;
