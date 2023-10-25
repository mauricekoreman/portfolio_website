import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: var(--fs-medium);
  font-weight: var(--fw-regular);
  line-height: 2.4rem;
  opacity: 0.9;
  margin: ${({ margin }) => margin};
`;

