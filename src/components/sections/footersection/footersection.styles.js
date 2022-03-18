import styled from "styled-components";
import { device } from "../../../breakpoints";

export const Footer = styled.footer`
  background-color: var(--primary-color-dark);
  color: white;
  margin-top: -1px;
  height: 80vh;
  display: grid;
  align-items: end;
  padding: 20rem 0;
`;

export const FooterContainer = styled.div`
  width: 80%;
  max-width: 100rem;
  margin: 0 auto;
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;

  & > nav {
    margin-right: 20rem;
  }
`;

export const Mail = styled.a`
  display: none;

  @media ${device.tablet} {
    display: inline;
    text-decoration: none;
    color: white;
    font-size: var(--fs-medium);
    letter-spacing: 1.1px;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    align-self: flex-start;
  }
`;

export const FooterNavList = styled.ul`
  list-style: none;
  font-size: var(--fs-medium);
  font-weight: var(--fw-medium);
  text-align: left;

  & > li {
    margin-bottom: 4rem;

    & > a {
      text-decoration: none;
      color: white;
    }
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 10rem;
  padding-top: 4rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background-color: white;
  }

  & > p {
    font-size: var(--fs-medium);
  }
`;

export const SocialsContainer = styled.div`
  display: none;

  & > a {
    margin-left: 2rem;
    color: white;
  }

  @media ${device.tablet} {
    display: inline-block;
  }
`;
