import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { SkillItem } from "../projectcard/projectcard.styles";

export const OuterContainer = styled.main`
  padding: 0 var(--inner-content);
`;

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 20rem;
  max-width: 100rem;
  margin: 0 auto;

  & > p {
    max-width: 80ch;
  }
`;

export const HeadingContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledArrow = styled(FiArrowLeft)`
  font-size: 5rem;
  stroke-width: 1.5px;
  position: absolute;
  left: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ProjectImg = styled.img`
  aspect-ratio: 16 / 9;
  width: 100%;
  margin: 5rem 0 4rem;
`;

export const ProjectWebsite = styled.a`
  text-decoration: none;
  color: var(--accent-color);
  border-bottom: 1.3px solid var(--accent-color);
  padding-bottom: 0.3rem;
  font-size: 1.6rem;
  letter-spacing: 1.1px;
`;

export const CustomSkillItem = styled(SkillItem)`
  font-size: var(--fs-medium);
  font-weight: var(--fw-medium);
  margin: 1rem 0 4rem;
`;