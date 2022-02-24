import styled from "styled-components";

export const WorkssectionContainer = styled.section`
  margin-top: 8rem;
  margin-bottom: 15rem;
`;

export const GreenBlock = styled.div`
  background-color: var(--primary-color);
  width: 90vw;
  max-width: 100rem;
  padding: 4rem 0 5.4rem var(--inner-content);
`;

export const ProjectsContainer = styled.div`
  padding: 4rem var(--inner-content) 0 var(--inner-content);
  max-width: 100rem;
  margin: 0 auto;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    width: 0;
    border: 0.5px solid var(--accent-color);
    height: 120%;
    position: absolute;
    top: 2rem;
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
