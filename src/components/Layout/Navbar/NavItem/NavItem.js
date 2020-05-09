import React from "react";

import withDropdown from "../../../shared/HOC/withDropdown/withDropdown";

import { NavItemContainer } from "./NavItemStyle";

const NavItem = ({
  icon: IconComponent,
  dropdown: DropdownComponent,
  hasNotif,
  toggleDropdown,
  showDropdown,
  children,
}) => {
  return (
    <NavItemContainer hasNotif={hasNotif} onClick={toggleDropdown}>
      {children}
      <IconComponent />
      {showDropdown && <DropdownComponent />}
    </NavItemContainer>
  );
};

export default withDropdown(NavItem);
