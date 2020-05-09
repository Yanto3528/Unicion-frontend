import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectFriendRequests,
} from "../../../../redux/users/userSelector";
import { selectNotifications } from "../../../../redux/notifications/notificationSelector";

import NavbarProfileDropdown from "../NavbarProfileDropdown/NavbarProfileDropdown";
import NotificationDropdown from "../../../Notification/NotificationDropdown/NotificationDropdown";
import FriendRequestDropdown from "../../../User/FriendRequestDropdown/FriendRequestDropdown";
import NavItem from "../NavItem/NavItem";

import { NavListContainer, NavListItem } from "./NavListStyle";
import Avatar from "../../../shared/Avatar/Avatar";
import {
  PeopleIcon,
  BellIcon,
  ChevronDownIcon,
} from "../../../../styles/shared/Icons";

const NavList = ({ currentUser, notifications, friendRequests }) => {
  const hasNotif = notifications.some(
    (notification) => notification.read === false
  );
  const hasFriendRequest = friendRequests.length > 0;

  return (
    currentUser && (
      <Fragment>
        <NavListContainer>
          <NavListItem>
            <NavItem
              icon={PeopleIcon}
              dropdown={FriendRequestDropdown}
              hasNotif={hasFriendRequest}
            ></NavItem>
          </NavListItem>
          <NavListItem>
            <NavItem
              icon={BellIcon}
              dropdown={NotificationDropdown}
              hasNotif={hasNotif}
            ></NavItem>
          </NavListItem>
          <NavListItem>
            <NavItem icon={ChevronDownIcon} dropdown={NavbarProfileDropdown}>
              <Avatar src={currentUser.profile.avatar} />
            </NavItem>
          </NavListItem>
        </NavListContainer>
      </Fragment>
    )
  );
};

NavList.propTypes = {
  currentUser: PropTypes.object.isRequired,
  friendRequests: PropTypes.array.isRequired,
  notifications: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  friendRequests: selectFriendRequests,
  notifications: selectNotifications,
});

export default connect(mapStateToProps)(NavList);
