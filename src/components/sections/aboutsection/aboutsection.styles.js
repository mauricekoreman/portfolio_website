import styled from "styled-components";
import { device } from "../../../breakpoints";

export const AboutSectionContainer = styled.section`
  padding: 0 var(--inner-content);
  padding-top: 10rem;

  @media ${device.tablet} {
    padding-top: 18rem;
  }
`;

export const Content = styled.div`
  max-width: 100ch;
  margin: 0 auto;
  text-align: center;
`;

export const TitleContainer = styled.article`
  & > * {
    margin-bottom: 6rem;
  }
`;

export const AboutMe = styled.article`
  & > p:first-of-type {
    margin-bottom: 3rem;
  }
`;

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
  grid-template-columns: repeat(2, 14rem);
  gap: 0 5rem;
  margin-top: 1rem;

  @media (max-width: 350px) {
    gap: 0 2rem;
  }
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