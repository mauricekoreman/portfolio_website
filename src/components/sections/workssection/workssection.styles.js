import styled from "styled-components";
import { device } from "../../../breakpoints";

export const WorkssectionContainer = styled.section`
  margin-top: 8rem;
  margin-bottom: 15rem;

  @media ${device.tablet} {
    margin-top: 14rem;
  }

  @media ${device.desktop} {
    margin-top: 20rem;
  }
`;

export const TitleContainer = styled.div`
  padding: 0 2rem;

  @media ${device.tablet} {
    margin-left: 2rem;
  }

  @media ${device.desktop} {
    /* margin-left: 15rem; */
    max-width: 115rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProjectsContainer = styled.div`
  padding: 8rem var(--inner-content) 0 var(--inner-content);
  max-width: 100rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    width: 0;
    border: 0.5px solid var(--accent-color);
    height: 120%;
    position: absolute;
    top: 4rem;
  }

  & > li {
    margin-bottom: 10rem;
  }
`;

export const ButtonContainer = styled.div`
  background-color: white;
  padding: 3rem 0;
  z-index: 1;
`;
