import notificationTypes from "./notificationTypes";

const initialState = {
  notifications: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case notificationTypes.GET_NOTIFICATIONS_SUCCESS:
    case notificationTypes.DELETE_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
        error: null,
      };
    case notificationTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
      };
    case notificationTypes.READ_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
        error: null,
      };
    case notificationTypes.DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification._id !== action.payload
        ),
        error: null,
      };
    case notificationTypes.GET_NOTIFICATIONS_FAIL:
      return {
        ...state,
        notifications: [],
        error: action.payload,
      };
    case notificationTypes.READ_NOTIFICATIONS_FAIL:
    case notificationTypes.DELETE_NOTIFICATION_FAIL:
    case notificationTypes.DELETE_NOTIFICATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
