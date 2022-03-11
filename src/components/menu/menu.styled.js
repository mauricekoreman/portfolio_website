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
      background-color: #fff;
    }
  }
`;

export const NavContainer = styled.nav`
  display: none;

  @media ${device.desktop} {
    display: inline-block;
    width: 35%;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

export const NavigationItem = styled.li`
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  opacity: 0.6;
`;