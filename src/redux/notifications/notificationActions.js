import notificationTypes from "./notificationTypes";
import axios from "axios";
import { endpoint } from "../../config/config";

import { asyncRequest } from "../utils/asyncRequest";

// Get notifications
export const getNotifications = () => (dispatch) => {
  dispatch(
    asyncRequest(
      "GET",
      `${endpoint}/api/notifications`,
      null,
      notificationTypes.GET_NOTIFICATIONS_SUCCESS,
      notificationTypes.GET_NOTIFICATIONS_FAIL
    )
  );
};

// Add notification
export const addNotification = (notification) => (dispatch) => {
  dispatch({
    type: notificationTypes.ADD_NOTIFICATION,
    payload: notification,
  });
};

// Read notification
export const readNotifications = () => async (dispatch) => {
  try {
    await axios.put(`${endpoint}/api/notifications`);
    dispatch({
      type: notificationTypes.READ_NOTIFICATIONS_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: notificationTypes.READ_NOTIFICATIONS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// delete all notifications
export const deleteNotifications = () => (dispatch) => {
  dispatch(
    asyncRequest(
      "DELETE",
      `${endpoint}/api/notifications`,
      null,
      notificationTypes.DELETE_NOTIFICATIONS_SUCCESS,
      notificationTypes.DELETE_NOTIFICATIONS_FAIL
    )
  );
};

// delete single notification
export const deleteNotification = (id) => async (dispatch) => {
  try {
    await axios.delete(`${endpoint}/api/notifications/${id}`);
    dispatch({
      type: notificationTypes.DELETE_NOTIFICATION_SUCCESS,
      payload: id,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: notificationTypes.DELETE_NOTIFICATION_FAIL,
      payload: error.response.data.error,
    });
  }
};
