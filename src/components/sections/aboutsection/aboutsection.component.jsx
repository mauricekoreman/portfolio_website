import HeadingSecondary from "../../typography/heading-secondary/heading-secondary.component";
import {
  AboutSectionContainer,
  AboutMeHeading,
  AboutMe,
  SkillContainer,
  List,
  ListItem,
} from "./aboutsection.styles";
import { Paragraph } from "../../typography/paragraph/paragraph.styles";

import { AboutMeText } from "./aboutMeText";

const AboutSection = () => (
  <AboutSectionContainer>
    <article>
      <HeadingSecondary topText={"About"} headingText={"All About Me"} />
      <Paragraph style={{ marginTop: "1rem" }}>
        A front-end web developer who is all about crafting the best user experience.
      </Paragraph>
    </article>

    {AboutMeText.map((info, i) => (
      <AboutMe key={i}>
        <AboutMeHeading>{info.title}</AboutMeHeading>
        <Paragraph>{info.text}</Paragraph>
        {info.title.toLowerCase() == "my career so far" && (
          <SkillContainer>
            <Paragraph>{info.technologiesIntro}</Paragraph>
            <List>
              {info.technologiesList.map((j) => (
                <ListItem key={j}>{j}</ListItem>
              ))}
            </List>
          </SkillContainer>
        )}
      </AboutMe>
    ))}
  </AboutSectionContainer>
);

export default AboutSection;
