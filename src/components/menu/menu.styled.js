import styled from "styled-components";

export const Checkbox = styled.input`
  display: none;

  &:checked ~ nav {
    display: block;
  }
`;

export const MenuBtnLines = styled.button`
  position: relative;
  border: none;

  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 2px;
    background-color: var(--primary-color);
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

export const NavContainer = styled.nav`
  /* color: white; */
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  font-size: 2rem;
  font-weight: var(--fw-medium);
`;

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
