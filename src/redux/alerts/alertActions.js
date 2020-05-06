import alertTypes from "./alertTypes";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, type, duration = 3000) => (dispatch) => {
  const alert = {
    id: uuidv4(),
    msg,
    type,
  };
  dispatch({
    type: alertTypes.SET_ALERT,
    payload: alert,
  });

  setTimeout(
    () => dispatch({ type: alertTypes.REMOVE_ALERT, payload: alert.id }),
    duration
  );
};
