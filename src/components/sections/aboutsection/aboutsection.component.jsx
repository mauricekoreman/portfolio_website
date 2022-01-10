import HeadingSecondary from "../../typography/heading-secondary/heading-secondary.component";
import { AboutSectionContainer, AboutMeHeading, AboutMe } from "./aboutsection.styles";
import { Paragraph } from "../../typography/paragraph/paragraph.styles";

import { AboutMeText } from "./aboutMeText";

const AboutSection = () => (
  <AboutSectionContainer>
    <HeadingSecondary topText={"About"} lineOne={"Who Am I?"} />
    <Paragraph style={{ marginTop: "1rem" }}>
      A front-end web developer who is all about crafting the best user experience.
    </Paragraph>
    {AboutMeText.map((info, i) => (
      <AboutMe key={i}>
        <AboutMeHeading>{info.title}</AboutMeHeading>
        <Paragraph>{info.text}</Paragraph>
      </AboutMe>
    ))}
  </AboutSectionContainer>
);

export default AboutSection;
