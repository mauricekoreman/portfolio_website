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
  background-color: transparent;
  color: var(--primary-color);
  border: 1.5px solid var(--primary-color);

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`;

const goldenStyles = css`
  background-color: transparent;
  border: 1.5px solid var(--accent-color);
  color: var(--accent-color);

  &:hover {
    background-color: var(--accent-color);
    color: white;
  }

  &:focus {
    border-width: 2px;
  }
`;

const getButtonStyles = (props) => {
  if (props.goldenStyles) {
    return goldenStyles;
  }

  return props.isOutlined ? isOutlined : buttonStyles;
};

export const ButtonContainer = styled.button`
  width: inherit;
  height: 5rem;
  padding: 0 2em;
  font-size: 1.6rem;
  font-family: "Raleway";
  font-weight: var(--fw-medium);
  cursor: pointer;
  transition: background-color 0.1s ease, color 0.2s ease;

  ${getButtonStyles}
`;
