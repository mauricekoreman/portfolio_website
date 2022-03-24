import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/icons/logo.svg";
import Menu from "../../menu/menu.component";

import { HeaderContainer } from "./headersection.styles";

const HeaderSection = () => {
  const [bg, setBg] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname !== "/" ? setBg(false) : setBg(true);
  }, [location]);

  return (
    <HeaderContainer bg={bg}>
      <img onClick={() => navigate("/")} src={Logo} />
      <Menu bg={bg} />
    </HeaderContainer>
  );
};

export default HeaderSection;
