import { combineReducers } from "redux";
import user from "./users/userReducer";
import post from "./posts/postReducer";

export default combineReducers({
  user,
  post,
});
