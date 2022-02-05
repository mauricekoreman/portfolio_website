import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--primary-color-dark);
  padding: 10rem 0 5rem 0;
  color: white;
  margin-top: -1px;
`;

export const FooterContainer = styled.div`
  width: 80%;
  max-width: 90rem;
  margin: 0 auto;
`;

export const Mail = styled.p`
  display: none;

  text-decoration: none;
  color: white;
  font-size: var(--fs-medium);
  letter-spacing: 1.1px;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
`;

export const FooterNav = styled.nav`
  list-style: none;
  font-size: var(--fs-medium);
  font-weight: var(--fw-medium);

  & > li {
    margin-bottom: 2rem;

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
  padding-top: 2.5rem;

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
    font-size: var(--fs-small);
  }
`;

export const SocialsContainer = styled.div`
  display: none;
`;
