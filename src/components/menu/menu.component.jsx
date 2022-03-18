import { useState } from "react";
import Sidebar from "../sidebar/sidebar.component";
import { MenuBtn, MenuBtnLines } from "./menu.styled";

const Menu = ({ bg }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <MenuBtn onClick={toggleSidebar}>
        <MenuBtnLines bg={bg} />
      </MenuBtn>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Menu;
