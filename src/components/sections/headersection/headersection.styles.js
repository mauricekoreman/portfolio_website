import styled from "styled-components";
import { device } from "../../../breakpoints";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2.5rem 5rem 2.5rem;

  @media ${device.tablet} {
    background: ${({ bg }) =>
      bg ? "linear-gradient(90deg, #fff 65%, var(--primary-color) 65%)" : "#FFF"};
    padding: 4rem 6rem;
  }
`;
