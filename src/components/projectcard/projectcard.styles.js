import styled from "styled-components";
import { device } from "../../breakpoints";

export const ProjectItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 60rem;

  @media ${device.desktop} {
    max-width: unset;
    grid-template-rows: unset;
    grid-template-columns: repeat(12, 1fr);
    align-items: baseline;
  }
`;

export const ProjectImage = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-size: cover;
  z-index: 1;
  aspect-ratio: 16 / 9;

  @media ${device.desktop} {
    grid-column: ${({ alignment }) => (alignment ? "1 / 8" : "6 / -1")};
  }
`;

export const ProjectContent = styled.article`
  z-index: 3;
  color: #fff;
  background-color: var(--primary-color);
  margin: 3rem 0 0 0;
  padding: 2rem 0 4rem 0;

  @media ${device.desktop} {
    grid-column: ${({ alignment }) => (alignment ? "9 / -1" : "1 / 5")};
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: ${({ alignment }) => (alignment ? "flex-end" : "flex-start")};
  }
`;

export const AccentTitle = styled.span`
  letter-spacing: 1.5px;
  font-size: calc(var(--fs-small) - 2px);
`;

export const ProjectTitle = styled.h3`
  font-size: calc(var(--fs-medium) + 10px);
  font-weight: var(--fw-medium);
  letter-spacing: 1px;
  margin: 1rem 0 2rem 0;
`;

export const ProjectDescription = styled.p`
  font-size: var(--fs-medium);
  font-weight: var(--fw-medium);
  line-height: 2rem;

  @media ${device.desktop} {
    text-align: ${({ alignment }) => (alignment ? "right" : "left")};
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 1rem;
`;

export const SkillItem = styled.li`
  font-size: var(--fs-small);
  position: relative;

  &:not(:last-child)::after {
    content: "•";
    margin-left: 1rem;
  }
`;
