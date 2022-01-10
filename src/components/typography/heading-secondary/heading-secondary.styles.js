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
  background-color: var(--accent-color);
`;

export const HeadingContainer = styled.h2`
  font-size: var(--fs-large);
  font-weight: var(--fw-regular);
  color: black;
  opacity: 0.73;
`;

export const TopHeader = styled.span`
  color: var(--accent-color);
  font-size: var(--fs-medium);
  font-weight: var(--fw-bold);
`;

export const HeadingLine = styled.span`
  display: block;
`;
