import styled from "styled-components";
import { device } from "../../../breakpoints";

export const Paragraph = styled.p`
  font-size: var(--fs-medium);
  font-weight: var(--fw-regular);
  line-height: 2.5rem;
  opacity: 0.9;
  margin: ${({ margin }) => margin};
`;
