import styled from "styled-components";
import { device } from "../../breakpoints";

export const ProjectsPage = styled.main`
  text-align: center;
  position: relative;
`;

export const ProjectsContainer = styled.section`
  max-width: 130rem;
  margin: 0 auto;
  padding: 10rem 1rem;
  grid-template-columns: repeat(auto-fit, 30rem);
  display: grid;
  gap: 4rem;
  justify-content: center;

  @media ${device.mobileLarge} {
    grid-template-columns: repeat(auto-fit, 40rem);
  }
`;

export const Project = styled.article`
  position: relative;
  width: 30rem;

  @media ${device.mobileLarge} {
    width: 40rem;
  }
`;

export const ProjectImage = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  aspect-ratio: 16 / 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;

  &::after {
    content: "";
    background-color: var(--primary-color);
    height: 100%;
    width: 100%;
    position: absolute;
    transition: transform 0.3s;
    transform: translateY(100%);
  }

  &:hover::after {
    transform: translateY(0);
  }

  &:hover {
    cursor: pointer;
  }

  &:hover > h3 {
    opacity: 1;
    transition-delay: 0.2s;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  z-index: 1;
  opacity: 0;
  color: #fff;
  transition: 0.3s;
`;
