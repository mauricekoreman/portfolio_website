import Logo from "../../../assets/icons/logo.svg";
import Menu from "../../menu/menu.component";

import { HeaderContainer } from "./headersection.styles";

const HeaderSection = () => (
  <HeaderContainer>
    <img src={Logo} />
    <Menu />
  </HeaderContainer>
);

export default HeaderSection;
