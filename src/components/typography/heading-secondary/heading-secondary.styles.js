import styled from "styled-components";

export const TopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4em;
  margin-bottom: 2em;
  opacity: 0.43;
`;

export const Line = styled.div`
  height: 0.2rem;
  width: 0.8rem;
  background-color: ${({ color }) => (color ? color : "var(--accent-color);")};
`;

export const HeadingLine = styled.h2`
  font-size: var(--fs-large);
  font-weight: var(--fw-medium);
  color: ${({ color }) => (color ? color : "black")};
  opacity: ${({ color }) => (color == "white" ? 1 : 0.73)};
`;

export const TopHeader = styled.span`
  color: ${({ color }) => (color ? color : "var(--accent-color);")};
  font-size: var(--fs-medium);
  font-weight: var(--fw-bold);
`;