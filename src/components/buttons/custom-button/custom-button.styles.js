import styled, { css } from "styled-components";

const buttonStyles = css`
  color: white;
  background-color: var(--primary-color);
  border: none;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const isOutlined = css`
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);

  &:focus,
  &:hover {
    background-color: var(--primary-color-dark);
    color: white;
    border: 2px solid transparent;
  }
`;

const goldenStyles = css`
  background-color: gold;
  color: gold;

  &:focus,
  &:hover {
    background-color: lightgoldenrodyellow;
    border: none;
    color: white;
  }
`;

const getButtonStyles = (props) => {
  if (props.goldenStyles) {
    return goldenStyles;
  }

  return props.isOutlined ? isOutlined : buttonStyles;
};

export const ButtonContainer = styled.button`
  height: 5rem;
  padding: 0 2em;
  font-size: 1.6rem;
  font-family: "Raleway";
  font-weight: var(--fw-medium);
  cursor: pointer;

  ${getButtonStyles}
`;