import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

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
  display: flex;
  justify-content: center;
  border: 1px solid blue;
  position: relative;
`;

export const StyledArrow = styled(FiArrowLeft)`
  font-size: 60px;
  position: absolute;
  left: 0;
`;

export const ProjectImg = styled.img`
  aspect-ratio: 16 / 9;
  width: 100%;
  margin: 5rem 0;
`;
