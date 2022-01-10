import { MenuBtnLines, Checkbox, NavContainer, ListContainer, NavigationItem } from "./menu.styled";

const Menu = () => (
  <div>
    <Checkbox type="checkbox" id="navi-toggle" />
    <label for="navi-toggle">
      <MenuBtnLines />
    </label>
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

export default Menu;
