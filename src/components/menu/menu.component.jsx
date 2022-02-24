import { useState } from "react";
import Sidebar from "../sidebar/sidebar.component";
import { MenuBtnLines } from "./menu.styled";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>
      <MenuBtnLines onClick={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      {/* <NavContainer>
      <ListContainer>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Works</NavigationItem>
        <NavigationItem>Resume</NavigationItem>
        <NavigationItem>Contact Me</NavigationItem>
      </ListContainer>
    </NavContainer> */}
    </div>
  );
};

export default Menu;
