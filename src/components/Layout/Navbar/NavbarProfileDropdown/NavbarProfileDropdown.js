import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../../redux/users/userActions";

import Dropdown, { DropdownOption } from "../../../../styles/shared/Dropdown";

import { PersonOutlineIcon, LogoutIcon } from "../../../../styles/shared/Icons";

const NavbarProfileDropdown = ({ logout }) => {
  return (
    <Dropdown width="20rem">
      <DropdownOption>
        <PersonOutlineIcon />
        <Link to="/edit-profile/personal-information">Edit Profile</Link>
      </DropdownOption>
      <DropdownOption onClick={logout}>
        <LogoutIcon />
        <Link to="/login">Logout</Link>
      </DropdownOption>
    </Dropdown>
  );
};

NavbarProfileDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(NavbarProfileDropdown);
