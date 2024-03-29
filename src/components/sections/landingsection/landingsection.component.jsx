import { useNavigate } from "react-router-dom";
import {
  LandingSectionContainer,
  ButtonsContainer,
  ImageContainer,
  Image,
  Frame,
  StyledParagraph,
  Content,
} from "./landingsection.styles";

import sexy from "../../../assets/img/sexy.webp";
import CV from "../../../assets/CV_mauricekoreman.pdf";

import HeadingPrimary from "../../typography/heading-primary/heading-primary.component";
import CustomButton from "../../buttons/custom-button/custom-button.component";

const LandingSection = () => {
  const navigate = useNavigate();

  return (
    <LandingSectionContainer id='landing'>
      <Content>
        <div>
          <HeadingPrimary
            topText={"Hi, my name is"}
            headingText={"Maurice Koreman."}
            bottomText={"And I Love Webdevelopment"}
          />
          <StyledParagraph margin={"2rem 0 "}>
            I'm a frontend webdeveloper living in The Netherlands. I like to build (and sometimes
            design) great digital experiences.
          </StyledParagraph>
          <ButtonsContainer>
            <CustomButton onClick={() => navigate("/#works")}>What I've Built</CustomButton>
            <a href={CV} target={"_blank"} rel='noreferrer'>
              <CustomButton isOutlined>See Resume</CustomButton>
            </a>
          </ButtonsContainer>
        </div>
        <ImageContainer>
          <Frame />
          <Image src={sexy} alt='Maurice profile picture' />
        </ImageContainer>
      </Content>
    </LandingSectionContainer>
  );
};

export default LandingSection;
