import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteNotification } from "../../redux/notifications/notificationActions";

import moment from "moment";

import Avatar from "../shared/Avatar/Avatar";

import {
  NotificationItem,
  NotificationItemDetail,
  NotificationDate,
} from "./NotificationStyle";
import Body from "../../styles/shared/Body";
import { CloseCircleIcon } from "../../styles/shared/Icons";

const Notification = ({ notification, deleteNotification }) => {
  const onDeleteNotification = () => deleteNotification(notification._id);

  return (
    <NotificationItem>
      <NotificationItemDetail>
        <Avatar src={notification.sender.profile.avatar} />
        <div>
          <Body>{notification.message}</Body>
          <NotificationDate>
            {moment(notification.createdAt).fromNow()}
          </NotificationDate>
        </div>
      </NotificationItemDetail>
      <CloseCircleIcon onClick={onDeleteNotification} />
    </NotificationItem>
  );
};

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  deleteNotification: PropTypes.func.isRequired,
};

export default connect(null, { deleteNotification })(Notification);
