import { HashLink } from "react-router-hash-link";
import { Navbar, MenuItemList, MenuItem, Toggle, NavButton } from "./sidebar.styles.js";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop.component.jsx";

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
    title: "Projects",
    path: "#works",
    cName: "menu-item",
  },
  {
    title: "Contact",
    path: "#contact",
    cName: "menu-item",
  },
];

const sidebarVariant = {
  hidden: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    x: "0%",
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const MotionNavbar = motion(Navbar);

const Sidebar = ({ showSidebar, toggleSidebar }) => (
  <>
    <Backdrop show={showSidebar} toggleShow={toggleSidebar} />
    <MotionNavbar
      variants={sidebarVariant}
      initial={"hidden"}
      animate={showSidebar ? "visible" : "hidden"}
    >
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
    </MotionNavbar>
  </>
);

export default Sidebar;
