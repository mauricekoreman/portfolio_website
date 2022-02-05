import styled from "styled-components";

export const TopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4em;
  margin-bottom: 1em;
  opacity: 0.43;
`;

export const Line = styled.div`
  height: 0.2rem;
  width: 0.8rem;
  background-color: var(--accent-color);
`;

export const HeadingLine = styled.h1`
  font-size: var(--fs-xl);
  font-weight: var(--fw-regular);
  color: black;
  opacity: 0.73;
`;

export const TopHeader = styled.span`
  color: var(--accent-color);
  font-size: var(--fs-medium);
  font-weight: var(--fw-bold);
`;

export const BottomText = styled.p`
  padding-top: 1rem;
  font-size: calc(var(--fs-xl) / 2);
  font-weight: var(--fw-regular);
  color: rgba(0, 0, 0, 0.43);
`;
