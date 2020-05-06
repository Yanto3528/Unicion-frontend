import React, { Fragment } from "react";
import { connect } from "react-redux";

import Searchbar from "../../Searchbar/Searchbar";

import { NavListContainer, NavListItem, NavItem } from "./NavListStyle";
import Avatar from "../../../../styles/shared/Avatar";
import {
  PeopleIcon,
  BellIcon,
  ChevronDownIcon,
} from "../../../../styles/shared/Icons";

const NavList = ({ currentUser }) => {
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
            <NavItem>
              <Avatar src={currentUser.profile.avatar} />
              <h3>{`${currentUser.profile.firstName} ${currentUser.profile.lastName}`}</h3>
              <ChevronDownIcon />
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

export default connect(mapStateToProps)(NavList);
