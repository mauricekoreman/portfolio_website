import styled from "styled-components";
import { device } from "../../../breakpoints";
import WavyLine from "../../../assets/img/wavy-line";

export const AboutGrid = styled.div``;

export const AboutSectionContainer = styled.section`
  position: relative;
`;

export const TitleContainer = styled.article`
  padding: 5rem 2rem;
`;

export const AboutMe = styled.article`
  background-image: linear-gradient(90deg, #7b927b 4rem, white 4rem);
  padding: 2rem 2rem 5rem 5.5rem;

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

export const StyledWavyLine = styled(WavyLine)`
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateX(0.6%);
  height: 145%;
`;