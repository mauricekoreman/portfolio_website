import {
  LandingSectionContainer,
  ButtonsContainer,
  ImageContainer,
  Image,
  Frame,
} from "./landingsection.styles";

import PictureFrameInverted from "../../../assets/img/picture-frame-inverted.svg";
import sexy from "../../../assets/img/Profile-picture.png";

import HeadingPrimary from "../../typography/heading-primary/heading-primary.component";
import CustomButton from "../../buttons/custom-button/custom-button.component";

import { Paragraph } from "../../typography/paragraph/paragraph.styles";

const LandingSection = () => {
  return (
    <LandingSectionContainer>
      <HeadingPrimary lineOne={`Hi, I'm Maurice`} lineTwo={"Koreman"} />
      <Paragraph margin={"2rem 0 "}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo
      </Paragraph>
      <ButtonsContainer>
        <CustomButton>Works</CustomButton>
        <CustomButton isOutlined>Download CV</CustomButton>
      </ButtonsContainer>
      <ImageContainer>
        <Frame src={PictureFrameInverted} />
        <Image src={sexy} alt="Maurice profile picture" />
      </ImageContainer>
    </LandingSectionContainer>
  );
};

export default LandingSection;
