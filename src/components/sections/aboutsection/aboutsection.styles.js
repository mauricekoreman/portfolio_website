import styled from "styled-components";
import { device } from "../../../breakpoints";

export const AboutSectionContainer = styled.section`
  padding: 0 var(--inner-content);
  padding-top: 10rem;
  position: relative;

  @media ${device.tablet} {
    padding-top: 18rem;
  }
`;

export const Content = styled.div`
  max-width: 100ch;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

export const TitleContainer = styled.article`
  & > div {
    margin-bottom: 6rem;
  }

  & > p {
    margin-bottom: 3rem;
  }
`;

export const Ref = styled.a`
  text-decoration: none;
  font-weight: var(--fw-bold);
  color: var(--primary-color);
`;

export const AboutMe = styled.article``;

export const AboutMeHeading = styled.h3`
  font-size: calc(var(--fs-medium) + 2px);
  font-weight: var(--fw-bold);
  color: #000;
  margin-bottom: 2rem;
`;

export const SkillContainer = styled.div`
  margin-top: 5rem;
  text-align: left;

  & > div {
    width: fit-content;
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: calc(var(--fs-medium) - 3px);
  font-weight: var(--fw-medium);
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0 5rem;
  width: min-content;
  margin: 0 auto;
  margin-top: 1rem;

  @media (max-width: 350px) {
    gap: 0 2rem;
  }
`;

export const ListItem = styled.li`
  padding-left: 1.5rem;
  margin-top: 1.3rem;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "▹";
    line-height: 0;
    position: absolute;
    left: 0;
    font-size: var(--fs-medium);
    color: var(--primary-color);
  }
`;

export const ShapesContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 8rem;
`;

const SVGPattern = styled.div`
  background-image: ${({ pattern }) => `url(${pattern})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  height: 100px;
  width: 100px;
`;

export const Raster = styled(SVGPattern)`
  bottom: 0;
  right: 50%;
  transform: translate(50rem, -20rem);
`;

export const Circles = styled(SVGPattern)`
  top: 0;
  left: 50%;
  transform: translateX(-55rem);
`;

export const Stairs = styled(SVGPattern)`
  top: 0;
  left: 50%;
  height: 8rem;
  width: 8rem;
  transform: translate(-45rem, 20rem);
`;

export const HorizontalStairs = styled(Stairs)`
  top: unset;
  left: unset;
  bottom: 0;
  right: 50%;
  transform: translate(40rem, 0) rotate(-45deg);
`;