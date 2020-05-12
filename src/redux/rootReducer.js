import { combineReducers } from "redux";
import user from "./users/userReducer";
import post from "./posts/postReducer";
import alerts from "./alerts/alertReducer";
import notification from "./notifications/notificationReducer";
import menu from "./menu/menuReducer";

export default combineReducers({
  user,
  post,
  alerts,
  notification,
  menu,
});
