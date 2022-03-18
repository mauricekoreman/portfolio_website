import styled from "styled-components";
import { device } from "../../breakpoints";

export const MenuBtn = styled.button`
  width: 3rem;
  height: 3rem;
  background: none;
  position: relative;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuBtnLines = styled.div`
  width: 100%;
  height: 2px;
  position: relative;
  background-color: var(--primary-color);

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 50%;
    background-color: var(--primary-color);
  }

  &::before {
    top: 0;
    left: 0;
    transform: translateY(-1rem);
  }

  &::after {
    bottom: 0;
    right: 0;
    transform: translateY(1rem);
  }

  @media ${device.tablet} {
    &,
    &::before,
    &::after {
      background-color: ${({ bg }) => (bg ? "#FFF" : "var(--primary-color)")};
    }
  }
`;