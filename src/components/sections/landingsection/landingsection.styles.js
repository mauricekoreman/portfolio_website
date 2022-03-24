import styled from "styled-components";
import { device } from "../../../breakpoints";
import pictureFrameInverted from "../../../assets/img/picture-frame-inverted.svg";
import pictureFrame from "../../../assets/img/picture-frame.svg";
import { Paragraph } from "../../typography/paragraph/paragraph.styles";

export const LandingSectionContainer = styled.section`
  padding: 0 var(--inner-content);
  padding-bottom: 7rem;
  background: linear-gradient(#fff 70%, var(--primary-color) 70%);
  width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    background: linear-gradient(90deg, #fff 65%, var(--primary-color) 65%);
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const Content = styled.div`
  max-width: 180rem;
  margin: 0 auto;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${device.mediumDesktop} {
    gap: 3rem;
  }

  @media ${device.biDesktop} {
    justify-content: space-between;
    padding-left: 10rem;
    padding-right: 15rem;
    gap: 0;
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

  & > a {
    width: 100%;
  }

  @media ${device.mobileLarge} {
    display: flex;
    gap: 2rem;
  }

  & > button:first-child {
    margin-bottom: 1rem;
  }

  & > button,
  & > a {
    @media ${device.mobileLarge} {
      width: unset;
    }
  }
`;

export const ImageContainer = styled.figure`
  max-width: 60rem;
  max-height: 60rem;
  position: relative;
  display: grid;
  place-items: center;
  margin: 0 auto;

  @media ${device.tablet} {
    --imageSize: 40rem;
    max-width: unset;
    max-height: unset;
    width: var(--imageSize);
    height: var(--imageSize);
    margin: unset;
  }

  @media ${device.desktop} {
    margin-right: 7%;
  }

  @media ${device.mediumDesktop} {
    --imageSize: 45rem;
  }
`;

export const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: contain;
  z-index: 3;
  filter: brightness(107%);

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
