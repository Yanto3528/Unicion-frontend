import React, { useState, Fragment } from "react";

const withDropdown = (WrappedComponent) => {
  const Dropdown = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onToggleDropdown = () => {
      setShowDropdown((prevState) => !prevState);
    };
    return (
      <Fragment>
        <WrappedComponent
          toggleDropdown={onToggleDropdown}
          showDropdown={showDropdown}
          {...props}
        />
      </Fragment>
    );
  };
  return Dropdown;
};

export default withDropdown;
