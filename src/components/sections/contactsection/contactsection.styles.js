import styled from "styled-components";

export const SectionContainer = styled.article`
  padding: 0 var(--inner-content) 3rem var(--inner-content);
  background: linear-gradient(white 50%, var(--primary-color-dark) 50%);

  & > * {
    margin: 0 auto;
  }
`;
