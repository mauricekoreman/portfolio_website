import styled, { css } from "styled-components";
import { device } from "../../../breakpoints";
import { Square, Triangle } from "../aboutsection/aboutsection.styles";

export const WorkssectionContainer = styled.section`
  margin-top: 8rem;
  margin-bottom: 15rem;
  position: relative;

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
    max-width: 130rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProjectsContainer = styled.div`
  padding: 8rem var(--inner-content) 0 var(--inner-content);
  max-width: 120rem;
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
    margin-bottom: 15rem;
  }
`;

export const ButtonContainer = styled.div`
  background-color: white;
  padding: 3rem 0;
  z-index: 1;
  margin: 5rem 0;
`;

const shape = css`
  opacity: 0.16;
`;

export const StyledSquare = styled(Square)`
  right: 15%;
  top: 40rem;

  ${shape}
`;

export const StyledTriangle = styled(Triangle)`
  top: unset;
  left: 25%;
  bottom: 15rem;

  ${shape}
`;
