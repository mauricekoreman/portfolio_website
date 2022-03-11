import styled from "styled-components";
import { device } from "../../breakpoints";

export const ProjectItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const ImageContainer = styled.figure`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  overflow: hidden;

  @media ${device.tablet} {
    grid-column: ${({ alignment }) => (alignment ? "1 / 8" : "6 / -1")};
    height: 35rem;
  }
`;

export const ProjectImage = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: scale(1.1);
  filter: blur(5px) brightness(60%);

  @media ${device.tablet} {
    transform: scale(1);
    filter: blur(0px) brightness(100%);
  }
`;

export const Filter = styled.div`
  background-color: var(--primary-color);
  height: 100%;
  width: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ProjectContent = styled.div`
  z-index: 3;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 3rem;
  color: #fff;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: ${({ alignment }) => (alignment ? "flex-end" : "flex-start")};
    grid-column: ${({ alignment }) => (alignment ? "9 / -1" : "1 / 5")};
    padding: 4rem 0;

    & > div {
      background-color: #7b927b;
      color: #fff;
      padding: 2.3rem;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
    }
  }
`;

export const AccentTitle = styled.span`
  letter-spacing: 1.5px;
  font-size: calc(var(--fs-small) - 2px);

  @media ${device.tablet} {
    color: #000;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: calc(var(--fs-medium) + 10px);
  font-weight: var(--fw-medium);
  letter-spacing: 1px;
  margin: 1rem 0 2rem 0;

  @media ${device.tablet} {
    color: #000;
  }
`;

export const ProjectDescription = styled.p`
  font-size: var(--fs-medium);
  font-weight: var(--fw-medium);
  line-height: 2rem;

  /* TODO change into variable */
  @media ${device.tablet} {
    text-align: ${({ alignment }) => (alignment ? "right" : "left")};
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 1rem;

  @media ${device.tablet} {
    margin-top: 1.5rem;
    color: #000;
  }
`;

export const SkillItem = styled.li`
  font-size: var(--fs-small);
  position: relative;

  &:not(:last-child)::after {
    content: "•";
    margin-left: 1rem;
  }
`;
