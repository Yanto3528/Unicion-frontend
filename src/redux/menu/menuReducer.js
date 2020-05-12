import menuTypes from "./menuTypes";

export default (state = false, action) => {
  switch (action.type) {
    case menuTypes.TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
};
