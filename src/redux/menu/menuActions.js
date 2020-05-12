import menuTypes from "./menuTypes";

export const toggleMenu = () => (dispatch) => {
  dispatch({
    type: menuTypes.TOGGLE_MENU,
  });
};
