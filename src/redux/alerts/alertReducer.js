import alertTypes from "./alertTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case alertTypes.SET_ALERT:
      return [...state, action.payload];
    case alertTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
