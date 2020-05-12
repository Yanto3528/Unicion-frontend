import React, { useState } from "react";

const withDropdown = (WrappedComponent) => {
  const Dropdown = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onToggleDropdown = () => {
      setShowDropdown((prevState) => !prevState);
    };
    const onCloseDropdown = () => setShowDropdown(false);
    return (
      <WrappedComponent
        toggleDropdown={onToggleDropdown}
        closeDropdown={onCloseDropdown}
        showDropdown={showDropdown}
        {...props}
      />
    );
  };
  return Dropdown;
};

export default withDropdown;
