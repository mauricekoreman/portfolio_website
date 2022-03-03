import {
  LandingSectionContainer,
  ButtonsContainer,
  ImageContainer,
  Image,
  Frame,
  StyledParagraph,
  Content,
} from "./landingsection.styles";

import sexy from "../../../assets/img/Profile-picture.png";

import HeadingPrimary from "../../typography/heading-primary/heading-primary.component";
import CustomButton from "../../buttons/custom-button/custom-button.component";

const LandingSection = () => {
  return (
    <LandingSectionContainer>
      <Content>
        <div>
          <HeadingPrimary
            topText={"Hi, my name is"}
            headingText={"Maurice Koreman."}
            bottomText={"And I Love Webdevelopment"}
          />
          <StyledParagraph margin={"2rem 0 "}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo
          </StyledParagraph>
          <ButtonsContainer>
            <CustomButton>What I've Built</CustomButton>
            <CustomButton isOutlined>Download CV</CustomButton>
          </ButtonsContainer>
        </div>
        <ImageContainer>
          <Frame />
          <Image src={sexy} alt="Maurice profile picture" />
        </ImageContainer>
      </Content>
    </LandingSectionContainer>
  );
};

export default LandingSection;
