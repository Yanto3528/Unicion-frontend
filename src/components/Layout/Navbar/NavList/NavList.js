import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import Searchbar from "../../Searchbar/Searchbar";
import NavbarProfileDropdown from "../NavbarProfileDropdown/NavbarProfileDropdown";
import NotificationDropdown from "../../../Notification/NotificationDropdown/NotificationDropdown";
import FriendRequestDropdown from "../../../User/FriendRequestDropdown/FriendRequestDropdown";

import { NavListContainer, NavListItem, NavItem } from "./NavListStyle";
import Avatar from "../../../shared/Avatar/Avatar";
import {
  PeopleIcon,
  BellIcon,
  ChevronDownIcon,
} from "../../../../styles/shared/Icons";

const NavList = ({ currentUser, notifications, friendRequests }) => {
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
  const hasFriendRequest = friendRequests.length > 0;

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
            <NavItem hasNotif={hasFriendRequest}>
              <PeopleIcon onClick={onToggleFriendRequest} />
              {showFriendRequestDropdown && <FriendRequestDropdown />}
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
  friendRequests: state.user.friendRequests,
  notifications: state.notification.notifications,
});

export default connect(mapStateToProps)(NavList);
