import userTypes from "./userTypes";
import axios from "axios";

import setAuthToken from "../../utils/setAuthToken";

// Search user by name
export const searchUsers = (query) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(`/api/profiles?s=${query}`);
    dispatch({
      type: userTypes.SEARCH_USERS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.SEARCH_USERS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Get user friends
export const getUserFriends = (id) => async (dispatch) => {
  dispatch(
    handleGetUserRequest(
      `/api/users/${id}/friends`,
      userTypes.GET_USERS_FRIENDS_SUCCESS,
      userTypes.GET_USERS_FRIENDS_FAIL
    )
  );
};

// Get user friend requests
export const getFriendRequests = () => async (dispatch) => {
  dispatch(
    handleGetUserRequest(
      `/api/users/friend-requests`,
      userTypes.GET_FRIEND_REQUEST_SUCCESS,
      userTypes.GET_FRIEND_REQUEST_FAIL
    )
  );
};

// Get user by id
export const getUserById = (id) => async (dispatch) => {
  dispatch(
    handleGetUserRequest(
      `/api/users/${id}/user`,
      userTypes.GET_USER_BY_ID_SUCCESS,
      userTypes.GET_USER_BY_ID_FAIL
    )
  );
};

// Register a user
export const register = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.post(`/api/users/register`, formData);
    dispatch({
      type: userTypes.REGISTER_SUCCESS,
      payload: res.data.token,
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.REGISTER_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Login a user
export const login = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.post(`/api/users/login`, formData);
    dispatch({
      type: userTypes.LOGIN_SUCCESS,
      payload: res.data.token,
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.LOGIN_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Logout a user
export const logout = () => (dispatch) => {
  dispatch({
    type: userTypes.LOGOUT_SUCCESS,
  });
};

// Load currently logged in user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`/api/users/me`);
    dispatch({
      type: userTypes.USER_LOADED,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.AUTH_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Update user's profile
export const updateProfile = (id, data, imageFile) => async (dispatch) => {
  dispatch(setLoading());
  const formData = new FormData();
  // Append all data keys and value to formData
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  if (imageFile) formData.append("image", imageFile);
  try {
    const res = await axios.put(`/api/profiles/${id}`, formData);
    dispatch({
      type: userTypes.UPDATE_PROFILE_SUCCESS,
      payload: { msg: res.data.msg, res: res.data.data },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.UPDATE_PROFILE_FAIL,
      payload: error.response.data.error.msg,
    });
  }
};

// Change user password
export const changePassword = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.put(`/api/users/update-password`, formData);
    dispatch({
      type: userTypes.CHANGE_PASSWORD_SUCCESS,
      payload: res.data.msg,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.CHANGE_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Upload Cover image
export const uploadCoverImage = (id, image) => async (dispatch) => {
  dispatch(setLoading());
  const formData = new FormData();
  formData.append("image", image);
  try {
    const res = await axios.put(`/api/profiles/${id}/cover-photo`, formData);
    dispatch({
      type: userTypes.UPLOAD_COVER_PHOTO_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.UPLOAD_COVER_PHOTO_FAIL,
      payload: error.response.data.error,
    });
  }
};

// append friend request to existing friend requests array
export const addFriendRequest = (friendRequest) => (dispatch) => {
  dispatch({
    type: userTypes.ADD_FRIEND_REQUEST,
    payload: friendRequest,
  });
};

// Send friend request
export const sendRequest = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.put(`/api/users/${id}/friend-request`);
    dispatch({
      type: userTypes.SEND_FRIEND_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.SEND_FRIEND_REQUEST_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Accept friend request
export const acceptRequest = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.put(`/api/users/${id}/accept-friend-request`);
    dispatch({
      type: userTypes.ACCEPT_FRIEND_REQUEST_SUCCESS,
      payload: { res: res.data.data, id },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.ACCEPT_FRIEND_REQUEST_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Delete friend request
export const deleteRequest = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.delete(`/api/users/${id}/delete-friend-request`);
    dispatch({
      type: userTypes.DELETE_FRIEND_REQUEST_SUCCESS,
      payload: { res: res.data.data, id },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.DELETE_FRIEND_REQUEST_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Delete friend
export const deleteFriend = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.delete(`/api/users/${id}/delete-friend`);
    dispatch({
      type: userTypes.DELETE_FRIEND_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.DELETE_FRIEND_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Set loading
export const setLoading = (bool = true) => (dispatch) => {
  dispatch({
    type: userTypes.SET_LOADING,
    payload: bool,
  });
};

// Clear all error
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: userTypes.CLEAR_ERRORS,
  });
};

const handleGetUserRequest = (endpoint, successType, failType) => async (
  dispatch
) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(endpoint);
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
