import { HashLink } from "react-router-hash-link";
import { Navbar, MenuItemList, MenuItem, Toggle, NavButton } from "./sidebar.styles.js";
import { FiX } from "react-icons/fi";

const sidebarData = [
  {
    title: "Home",
    path: "/",
    cName: "menu-item",
  },
  {
    title: "About",
    path: "#about",
    cName: "menu-item",
  },
  {
    title: "Works",
    path: "#works",
    cName: "menu-item",
  },
  {
    title: "Contact",
    path: "#contact",
    cName: "menu-item",
  },
];

const Sidebar = ({ showSidebar, toggleSidebar }) => (
  <Navbar showSidebar={showSidebar ? true : false}>
    <Toggle onClick={toggleSidebar}>
      <FiX color="white" size={40} strokeWidth={1} />
    </Toggle>
    <MenuItemList>
      {sidebarData.map((item, index) => (
        <MenuItem key={index}>
          <HashLink smooth to={item.path} onClick={toggleSidebar}>
            {item.title}
          </HashLink>
        </MenuItem>
      ))}
      <NavButton isOutlined>Download CV</NavButton>
    </MenuItemList>
  </Navbar>
);

export default Sidebar;
