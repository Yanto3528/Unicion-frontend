import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readNotifications } from "../../redux/notifications/notificationActions";
import moment from "moment";

import Avatar from "../shared/Avatar/Avatar";

import {
  NotificationHeader,
  NotificationTitle,
  NotificationAction,
  NotificationItem,
  NotificationItemDetail,
  NotificationDate,
} from "./NotificationStyle";
import Dropdown from "../../styles/shared/Dropdown";
import Body from "../../styles/shared/Body";
import { CloseCircleIcon } from "../../styles/shared/Icons";

const Notification = ({ notifications, readNotifications }) => {
  useEffect(() => {
    if (notifications.some((notification) => notification.read === false)) {
      readNotifications();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Dropdown width={"35rem"}>
      <NotificationHeader>
        <NotificationTitle>Notifications</NotificationTitle>
        {notifications.length > 0 && (
          <NotificationAction>Delete all</NotificationAction>
        )}
      </NotificationHeader>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationItem key={notification._id}>
            <NotificationItemDetail>
              <Avatar src={notification.sender.profile.avatar} />
              <div>
                <Body>{notification.message}</Body>
                <NotificationDate>
                  {moment(notification.createdAt).fromNow()}
                </NotificationDate>
              </div>
            </NotificationItemDetail>
            <CloseCircleIcon />
          </NotificationItem>
        ))
      ) : (
        <NotificationItem>
          <Body>No notification to show</Body>
        </NotificationItem>
      )}
    </Dropdown>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
});

export default connect(mapStateToProps, { readNotifications })(Notification);
