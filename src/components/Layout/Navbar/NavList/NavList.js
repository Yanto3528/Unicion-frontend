import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import Searchbar from "../../Searchbar/Searchbar";
import NavbarProfileDropdown from "../NavbarProfileDropdown/NavbarProfileDropdown";
import NotificationDropdown from "../../../NotificationDropdown/NotificationDropdown";

import { NavListContainer, NavListItem, NavItem } from "./NavListStyle";
import Avatar from "../../../shared/Avatar/Avatar";
import {
  PeopleIcon,
  BellIcon,
  ChevronDownIcon,
} from "../../../../styles/shared/Icons";

const NavList = ({ currentUser, notifications }) => {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(
    false
  );
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showFriendRequestDropdown, setShowFriendRequestDropdown] = useState(
    false
  );
  const hasNotif = notifications.some(
    (notification) => notification.read === false
  );

  const onToggleNotification = () =>
    setShowNotificationDropdown((prevState) => !prevState);
  const onToggleProfile = () =>
    setShowProfileDropdown((prevState) => !prevState);
  const onToggleFriendRequest = () =>
    setShowFriendRequestDropdown((prevState) => !prevState);

  return (
    currentUser && (
      <Fragment>
        <Searchbar />
        <NavListContainer>
          <NavListItem>
            <NavItem hasNotif={hasNotif}>
              <PeopleIcon onClick={onToggleFriendRequest} />
            </NavItem>
          </NavListItem>
          <NavListItem>
            <NavItem hasNotif={hasNotif}>
              <BellIcon onClick={onToggleNotification} />
              {showNotificationDropdown && <NotificationDropdown />}
            </NavItem>
          </NavListItem>
          <NavListItem>
            <NavItem onClick={onToggleProfile}>
              <Avatar src={currentUser.profile.avatar} />
              <ChevronDownIcon />
              {showProfileDropdown && <NavbarProfileDropdown />}
            </NavItem>
          </NavListItem>
        </NavListContainer>
      </Fragment>
    )
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  notifications: state.notification.notifications,
});

export default connect(mapStateToProps)(NavList);
