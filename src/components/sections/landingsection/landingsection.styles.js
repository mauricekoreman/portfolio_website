import styled from "styled-components";
import { device } from "../../../breakpoints";
import pictureFrameInverted from "../../../assets/img/picture-frame-inverted.svg";
import pictureFrame from "../../../assets/img/picture-frame.svg";
import { Paragraph } from "../../typography/paragraph/paragraph.styles";

export const LandingSectionContainer = styled.section`
  /* 
  display: flex;
  height: 80vh;
  padding: 20rem 0 0 13rem;
  justify-content: space-between;
  width: 100%;
  */

  padding: 0 var(--inner-content);
  background: linear-gradient(#fff 70%, var(--primary-color) 70%);
  padding-bottom: 10em;
  width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    background: linear-gradient(90deg, #fff 65%, var(--primary-color) 65%);
    padding-bottom: 0;
  }

  @media ${device.desktop} {
    /* padding: 0;
    border: 1px solid red; */
  }
`;

export const Content = styled.div`
  max-width: 150rem;
  margin: 0 auto;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  @media ${device.tablet} {
    max-width: 50rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 4rem 0 8rem 0;
  width: 100%;

  @media ${device.mobileLarge} {
    display: flex;
    gap: 2rem;
  }

  & > button:first-child {
    margin-bottom: 1rem;
  }

  & > button {
    @media ${device.mobileLarge} {
      width: unset;
    }
  }
`;

export const ImageContainer = styled.figure`
  /* For the bigger screen sizes maybe */
  /* --imageSize: clamp(40rem, 25vw + 1rem, 52rem);
  width: var(--imageSize);
  height: var(--imageSize); 
  margin-right: calc(35% - (var(--imageSize) / 2)); 
  */
  max-width: 60rem;
  max-height: 60rem;
  position: relative;
  display: grid;
  place-items: center;
  margin: 0 auto;

  @media ${device.tablet} {
    /* --imageSize: clamp(40rem, 25vw + 1rem, 50rem); */
    --imageSize: 40rem;
    max-width: unset;
    max-height: unset;
    width: var(--imageSize);
    height: var(--imageSize);
  }

  @media ${device.mediumDesktop} {
    --imageSize: 50rem;
    /* margin-right: calc(34% - (var(--imageSize) / 2)); */
    transform: translateX(-20%);
  }
`;

export const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: contain;
  z-index: 3;

  @media ${device.mobileLarge} {
    height: 80%;
    width: 80%;
  }
`;

export const Frame = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  background-image: url(${pictureFrameInverted});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media ${device.mobileLarge} {
    height: 90%;
    width: 90%;
  }

  @media ${device.tablet} {
    background-image: url(${pictureFrame});
  }
`;
