import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  readNotifications,
  deleteNotifications,
} from "../../../redux/notifications/notificationActions";

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

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
});

export default connect(mapStateToProps, {
  readNotifications,
  deleteNotifications,
})(NotificationDropdown);
