import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  readNotifications,
  deleteNotifications,
} from "../../../redux/notifications/notificationActions";

import { createStructuredSelector } from "reselect";
import { selectNotifications } from "../../../redux/notifications/notificationSelector";

import Notification from "../Notification";

import {
  NotificationAction,
  NotificationBody,
} from "./NotificationDropdownStyle";
import Dropdown, {
  DropdownHeader,
  DropdownTitle,
} from "../../../styles/shared/Dropdown";

const NotificationDropdown = ({
  notifications,
  readNotifications,
  deleteNotifications,
}) => {
  useEffect(() => {
    if (notifications.some((notification) => notification.read === false)) {
      readNotifications();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Dropdown width={"35rem"}>
      <DropdownHeader>
        <DropdownTitle>Notifications</DropdownTitle>
        {notifications.length > 0 && (
          <NotificationAction onClick={deleteNotifications}>
            Delete all
          </NotificationAction>
        )}
      </DropdownHeader>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <Notification key={notification._id} notification={notification} />
        ))
      ) : (
        <NotificationBody>No notification to show</NotificationBody>
      )}
    </Dropdown>
  );
};

NotificationDropdown.propTypes = {
  notifications: PropTypes.array.isRequired,
  readNotifications: PropTypes.func.isRequired,
  deleteNotifications: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notifications: selectNotifications,
});

export default connect(mapStateToProps, {
  readNotifications,
  deleteNotifications,
})(NotificationDropdown);
