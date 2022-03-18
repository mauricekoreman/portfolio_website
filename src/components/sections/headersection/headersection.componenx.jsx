import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../../assets/icons/logo.svg";
import Menu from "../../menu/menu.component";

import { HeaderContainer } from "./headersection.styles";

const HeaderSection = () => {
  const [bg, setBg] = useState(true);
  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/" ? setBg(false) : setBg(true);
    console.log("fired!");
  }, [location]);

  return (
    <HeaderContainer bg={bg}>
      <img src={Logo} />
      <Menu bg={bg} />
    </HeaderContainer>
  );
};

export default HeaderSection;
