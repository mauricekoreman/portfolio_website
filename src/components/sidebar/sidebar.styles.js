import styled from "styled-components";
import { device } from "../../breakpoints";
import CustomButton from "../buttons/custom-button/custom-button.component";

export const Navbar = styled.nav`
  background-color: var(--primary-color-dark);
  width: min(75vw, 400px);
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  list-style: none;
`;

export const MenuItemList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Toggle = styled.li`
  position: absolute;
  right: 2.5rem;
  top: 3rem;

  @media ${device.tablet} {
    right: 6rem;
    top: 4rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 2rem;
  height: 6rem;
  font-size: 2rem;

  & a {
    text-decoration: none;
    color: #fff;
    width: 95%;
  }
`;

export const NavButton = styled(CustomButton)`
  border: 1px solid white;
  color: white;
  margin-top: 4rem;

  &:focus {
    border: 2px solid #fff;
  }
`;
