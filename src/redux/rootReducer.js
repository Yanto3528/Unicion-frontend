import { combineReducers } from "redux";
import user from "./users/userReducer";
import post from "./posts/postReducer";
import alerts from "./alerts/alertReducer";
import notification from "./notifications/notificationReducer";

export default combineReducers({
  user,
  post,
  alerts,
  notification,
});
