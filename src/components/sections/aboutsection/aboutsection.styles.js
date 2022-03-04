import styled from "styled-components";
import { device } from "../../../breakpoints";

export const Content = styled.div``;

export const AboutSectionContainer = styled.section`
  position: relative;

  @media ${device.tablet} {
    padding-top: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const TitleContainer = styled.article`
  padding: 8rem 2rem;
  max-width: 55rem;

  @media ${device.tablet} {
    margin-left: 7rem;
  }

  @media ${device.desktop} {
    margin-left: 15rem;
  }
`;

const blockColor = "#7b927b";
export const AboutMe = styled.article`
  background-image: linear-gradient(90deg, ${blockColor} 4rem, white 4rem);
  padding: 2rem 2rem 5rem 5.5rem;

  @media ${device.tablet} {
    background-image: linear-gradient(90deg, ${blockColor} 14rem, white 14rem);
    padding-left: 15.5rem;
  }

  @media ${device.desktop} {
    background-image: linear-gradient(90deg, ${blockColor} 23.5rem, white 23.5rem);
    padding-left: 25rem;
  }

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const AboutMeHeading = styled.h3`
  font-size: calc(var(--fs-medium) + 2px);
  font-weight: var(--fw-bold);
  color: #000;
  margin-bottom: 1.5rem;
`;

export const SkillContainer = styled.div`
  margin-top: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  font-size: calc(var(--fs-medium) - 3px);
  font-weight: var(--fw-medium);
  display: grid;
  grid-template-columns: repeat(2, minmax(14rem, 18rem));
  gap: 0 2rem;
  margin-top: 1rem;
`;

export const ListItem = styled.li`
  padding-left: 1.5rem;
  margin-top: 1rem;
  position: relative;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    font-size: var(--fs-medium);
    line-height: 1.6rem;
    color: var(--primary-color);
  }
`;

export const Image = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    position: relative;
    margin-top: 8rem;

    display: grid;
    justify-items: center;
  }
`;

export const Square = styled.div`
  position: absolute;
  top: 5rem;
  background-color: #42628b;
  height: 14rem;
  width: 14rem;
  transform: translate(10%) rotate(-20deg);

  @media ${device.biDesktop} {
    height: 16rem;
    width: 16rem;
  }
`;
export const Circle = styled.div`
  position: absolute;
  top: 30rem;
  background-color: #455845;
  height: 16rem;
  width: 16rem;
  border-radius: 100%;
  transform: translateX(20%);

  @media ${device.biDesktop} {
    height: 18rem;
    width: 18rem;
  }
`;

let triangleSizeS = 22;
let triangleSizeM = 25;
export const Triangle = styled.div`
  position: absolute;
  top: 50rem;
  height: 0rem;
  width: 0rem;
  transform: translateX(-20%) rotate(17deg);

  border-bottom: ${triangleSizeS}rem solid #c59069;
  border-left: calc(${triangleSizeS} * 0.6rem) solid transparent;
  border-right: calc(${triangleSizeS} * 0.6rem) solid transparent;

  @media ${device.desktop} {
    transform: translateX(-40%) rotate(17deg);
  }

  @media ${device.biDesktop} {
    border-bottom: ${triangleSizeM}rem solid #c59069;
    border-left: calc(${triangleSizeM} * 0.6rem) solid transparent;
    border-right: calc(${triangleSizeM} * 0.6rem) solid transparent;
  }
`;