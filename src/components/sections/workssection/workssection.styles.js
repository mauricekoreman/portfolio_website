import styled from "styled-components";
import { device } from "../../../breakpoints";
import HeadingSecondary from "../../typography/heading-secondary/heading-secondary.component";

export const WorkssectionContainer = styled.section`
  margin-top: 13rem;
  margin-bottom: 15rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${device.desktop} {
    margin-top: 18rem;
  }
`;

export const Background = styled.div`
  background-color: var(--primary-color);
  transform: skewY(3deg);
  padding: 8rem var(--inner-content) 0 var(--inner-content);
  align-self: stretch;
  margin-bottom: 6rem;

  & > * {
    transform: skewY(-3deg);
  }

  @media ${device.desktop} {
    padding: 11rem 8rem 6rem 8rem;
  }
`;

export const StyledHeadingSecondary = styled(HeadingSecondary)`
  margin-bottom: 3rem;
  max-width: 60rem;
  margin: 0 auto;

  & > h2 {
    color: #fff;
    opacity: 1;
  }

  @media ${device.desktop} {
    max-width: 120rem;
  }
`;

export const ProjectsContainer = styled.div`
  padding: 8rem 0 0 0;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    padding: 15rem 0 0 0;
  }

  &::before {
    content: "";
    width: 0;
    border: 0.5px solid var(--accent-color);
    height: 140%;
    position: absolute;
    top: 9rem;
  }

  & > li {
    margin-bottom: 8rem;
  }
`;

export const ButtonContainer = styled.div`
  background-color: white;
  padding: 3rem 0;
  z-index: 1;

  @media ${device.desktop} {
    margin-bottom: 8rem;
  }
`;
