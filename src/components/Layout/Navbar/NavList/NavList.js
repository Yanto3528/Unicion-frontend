import React, { Fragment } from "react";
import { connect } from "react-redux";

import Searchbar from "../../Searchbar/Searchbar";
import NavbarProfileDropdown from "../NavbarProfileDropdown/NavbarProfileDropdown";
import withDropdown from "../../../shared/HOC/withDropdown/withDropdown";

import { NavListContainer, NavListItem, NavItem } from "./NavListStyle";
import Avatar from "../../../../styles/shared/Avatar";
import {
  PeopleIcon,
  BellIcon,
  ChevronDownIcon,
} from "../../../../styles/shared/Icons";

const NavList = ({ currentUser, showDropdown, toggleDropdown }) => {
  return (
    currentUser && (
      <Fragment>
        <Searchbar />
        <NavListContainer>
          <NavListItem>
            <NavItem hasNotif>
              <PeopleIcon />
            </NavItem>
          </NavListItem>
          <NavListItem>
            <NavItem hasNotif>
              <BellIcon />
            </NavItem>
          </NavListItem>
          <NavListItem>
            <NavItem onClick={toggleDropdown}>
              <Avatar src={currentUser.profile.avatar} />
              <ChevronDownIcon />
              {showDropdown && <NavbarProfileDropdown />}
            </NavItem>
          </NavListItem>
        </NavListContainer>
      </Fragment>
    )
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default withDropdown(connect(mapStateToProps)(NavList));
