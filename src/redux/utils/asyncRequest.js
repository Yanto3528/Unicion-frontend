import axios from "axios";

// Handle async request for redux
export const asyncRequest = (
  method,
  url,
  data,
  successType,
  failType
) => async (dispatch) => {
  try {
    const res = await axios({
      method,
      url,
      data,
    });
    dispatch({
      type: successType,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: failType,
      payload: error.response.data.error,
    });
  }
};

// Handle async request for redux with id key to payload object
export const asyncRequestWithId = (
  method,
  url,
  id,
  data,
  successType,
  failType
) => async (dispatch) => {
  try {
    const res = await axios({
      method,
      url,
      data,
    });
    dispatch({
      type: successType,
      payload: { res: res.data.data, id },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: failType,
      payload: error.response.data.error,
    });
  }
};
