import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ borderWidth }) => `${borderWidth} solid #FFF`};
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: ${rotate} 0.8s ease-in-out infinite;
`;
