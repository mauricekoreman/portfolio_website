import styled from "styled-components";

export const ProjectItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const ImageContainer = styled.figure`
  grid-area: 1 / 1 / -1 / -1;
  z-index: 1;
  overflow: hidden;
  position: relative;
`;

export const ProjectImage = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-size: cover;
  filter: blur(5px) brightness(60%);
  transform: scale(1.1);
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const Filter = styled.div`
  background-color: var(--primary-color);
  height: 100%;
  width: 100%;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
`;

export const ProjectContent = styled.div`
  color: white;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 3;
  padding: 3rem;
`;

export const AccentTitle = styled.span`
  letter-spacing: 1.5px;
  font-size: calc(var(--fs-small) - 2px);
`;

export const ProjectTitle = styled.h3`
  font-size: calc(var(--fs-medium) + 3px);
  font-weight: var(--fw-medium);
  letter-spacing: 1px;
  margin: 1rem 0 2rem 0;
`;

export const ProjectDescription = styled.p`
  font-size: var(--fs-medium);
  font-weight: var(--fw-medium);
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
