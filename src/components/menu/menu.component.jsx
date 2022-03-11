import { useState } from "react";
import Sidebar from "../sidebar/sidebar.component";
import {
  MenuBtn,
  MenuBtnLines,
  NavContainer,
  ListContainer,
  NavigationItem,
  MenuButton,
} from "./menu.styled";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <MenuBtn onClick={toggleSidebar}>
        <MenuBtnLines />
      </MenuBtn>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      {/* <NavContainer>
        <ListContainer>
          <NavigationItem>Home</NavigationItem>
          <NavigationItem>Works</NavigationItem>
          <NavigationItem>Resume</NavigationItem>
          <NavigationItem>Contact Me</NavigationItem>
        </ListContainer>
      </NavContainer> */}
    </>
  );
};

export default Menu;
