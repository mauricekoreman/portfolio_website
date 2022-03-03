import styled from "styled-components";
import { device } from "../../breakpoints";

export const MenuBtnLines = styled.button`
  position: relative;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 2px;
    background-color: var(--primary-color);

    @media ${device.tablet} {
      background-color: #fff;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
    width: 50%;
    left: 0;
  }

  &::after {
    top: 0.8rem;
    width: 50%;
    right: 0;
  }
`;