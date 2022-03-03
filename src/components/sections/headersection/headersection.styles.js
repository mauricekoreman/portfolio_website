import styled from "styled-components";
import { device } from "../../../breakpoints";

export const HeaderContainer = styled.header`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 9rem;
  padding: 0 5% 0 2rem; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 5rem 2rem;

  @media ${device.tablet} {
    background: linear-gradient(90deg, #fff 65%, var(--primary-color) 65%);
  }
`;
