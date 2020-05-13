import React, { useRef } from "react";

import withDropdown from "../../../shared/HOC/withDropdown/withDropdown";
import useClickOutside from "../../../../CustomHook/useClickOutside";

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
    <NavItemContainer hasNotif={hasNotif} ref={dropdownRef}>
      {children}
      <IconComponent onClick={toggleDropdown} />
      {showDropdown && (
        <DropdownComponent isDropdown={true} toggleDropdown={toggleDropdown} />
      )}
    </NavItemContainer>
  );
};

export default withDropdown(NavItem);
