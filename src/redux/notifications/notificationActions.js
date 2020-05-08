import notificationTypes from "./notificationTypes";
import axios from "axios";

// Get notifications
export const getNotifications = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/notifications");
    dispatch({
      type: notificationTypes.GET_NOTIFICATIONS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: notificationTypes.GET_NOTIFICATIONS_FAIL,
      payload: error.response.data.error,
    });
  }
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
    await axios.put("/api/notifications");
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
export const deleteNotifications = () => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/notifications/`);
    dispatch({
      type: notificationTypes.DELETE_NOTIFICATIONS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: notificationTypes.DELETE_NOTIFICATIONS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// delete single notification
export const deleteNotification = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/notifications/${id}`);
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
