import React, { useRef } from "react";

import withDropdown from "../../../shared/HOC/withDropdown/withDropdown";
import useClickOutside from "../../../../CustomHook/UseClickOutside";

import { NavItemContainer } from "./NavItemStyle";

const NavItem = ({
  icon: IconComponent,
  dropdown: DropdownComponent,
  hasNotif,
  children,
  showDropdown,
  toggleDropdown,
  closeDropdown,
}) => {
  const dropdownRef = useRef();
  useClickOutside(dropdownRef, closeDropdown);

  return (
    <NavItemContainer
      hasNotif={hasNotif}
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      {children}
      <IconComponent />
      {showDropdown && <DropdownComponent isDropdown={true} />}
    </NavItemContainer>
  );
};

export default withDropdown(NavItem);
