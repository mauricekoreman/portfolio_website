import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  padding: 5rem var(--inner-content) 0 var(--inner-content);
`;

export const AboutMe = styled.article`
  margin-top: 5em;
`;

export const AboutMeHeading = styled.h3`
  font-size: calc(var(--fs-medium) + 2px);
  font-weight: var(--fw-bold);
  color: var(--primary-color);
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