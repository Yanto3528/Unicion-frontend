import userTypes from "./userTypes";
import axios from "axios";
import { endpoint } from "../../config/config";

import setAuthToken from "../../utils/setAuthToken";
import { asyncRequest, asyncRequestWithId } from "../utils/asyncRequest";

// Search user by name
export const searchUsers = (query) => (dispatch) => {
  dispatch(setLoading());
  dispatch(
    asyncRequest(
      "GET",
      `${endpoint}/api/profiles?s=${query}`,
      null,
      userTypes.SEARCH_USERS_SUCCESS,
      userTypes.SEARCH_USERS_FAIL
    )
  );
};

// Get user friends
export const getUserFriends = (id) => (dispatch) => {
  dispatch(setLoading());
  dispatch(
    asyncRequest(
      "GET",
      `${endpoint}/api/users/${id}/friends`,
      null,
      userTypes.GET_USERS_FRIENDS_SUCCESS,
      userTypes.GET_USERS_FRIENDS_FAIL
    )
  );
};

// Get user friend requests
export const getFriendRequests = () => (dispatch) => {
  dispatch(setLoading());
  dispatch(
    asyncRequest(
      "GET",
      `${endpoint}/api/users/friend-requests`,
      null,
      userTypes.GET_FRIEND_REQUEST_SUCCESS,
      userTypes.GET_FRIEND_REQUEST_FAIL
    )
  );
};

// Get user by id
export const getUserById = (id) => (dispatch) => {
  dispatch(setLoading());
  dispatch(
    asyncRequest(
      "GET",
      `${endpoint}/api/users/${id}/user`,
      null,
      userTypes.GET_USER_BY_ID_SUCCESS,
      userTypes.GET_USER_BY_ID_FAIL
    )
  );
};

// Register a user
export const register = (formData) => (dispatch) => {
  dispatch(
    authPostRequest(
      `${endpoint}/api/users/register`,
      formData,
      userTypes.REGISTER_SUCCESS,
      userTypes.REGISTER_FAIL
    )
  );
};

// Login a user
export const login = (formData) => (dispatch) => {
  dispatch(
    authPostRequest(
      `${endpoint}/api/users/login`,
      formData,
      userTypes.LOGIN_SUCCESS,
      userTypes.LOGIN_FAIL
    )
  );
};

// Logout a user
export const logout = () => (dispatch) => {
  dispatch({
    type: userTypes.LOGOUT_SUCCESS,
  });
};

// Load currently logged in user
export const loadUser = () => (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  dispatch(setLoading());
  dispatch(
    asyncRequest(
      "GET",
      `${endpoint}/api/users/me`,
      null,
      userTypes.USER_LOADED,
      userTypes.AUTH_FAIL
    )
  );
};

// Update user's profile
export const updateProfile = (id, data, imageFile) => async (dispatch) => {
  dispatch(setLoading());
  const formData = new FormData();
  // Append all data keys and value to formData
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  if (imageFile) formData.append("image", imageFile);
  try {
    const res = await axios.put(`${endpoint}/api/profiles/${id}`, formData);
    dispatch({
      type: userTypes.UPDATE_PROFILE_SUCCESS,
      payload: { msg: res.data.msg, res: res.data.data },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: userTypes.UPDATE_PROFILE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Change user password
export const changePassword = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.put(
      `${endpoint}/api/users/update-password`,
      formData
    );
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
export const uploadCoverImage = (id, image) => (dispatch) => {
  const formData = new FormData();
  formData.append("image", image);
  dispatch(setLoadingImage());
  dispatch(
    asyncRequest(
      "PUT",
      `${endpoint}/api/profiles/${id}/cover-photo`,
      formData,
      userTypes.UPLOAD_COVER_PHOTO_SUCCESS,
      userTypes.UPLOAD_COVER_PHOTO_FAIL
    )
  );
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
  dispatch(
    asyncRequest(
      "PUT",
      `${endpoint}/api/users/${id}/friend-request`,
      null,
      userTypes.SEND_FRIEND_REQUEST_SUCCESS,
      userTypes.SEND_FRIEND_REQUEST_FAIL
    )
  );
};

// Accept friend request
export const acceptRequest = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch(
    asyncRequestWithId(
      "PUT",
      `${endpoint}/api/users/${id}/accept-friend-request`,
      id,
      null,
      userTypes.ACCEPT_FRIEND_REQUEST_SUCCESS,
      userTypes.ACCEPT_FRIEND_REQUEST_FAIL
    )
  );
};

// Delete friend request
export const deleteRequest = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch(
    asyncRequestWithId(
      "DELETE",
      `${endpoint}/api/users/${id}/delete-friend-request`,
      id,
      null,
      userTypes.DELETE_FRIEND_REQUEST_SUCCESS,
      userTypes.DELETE_FRIEND_REQUEST_FAIL
    )
  );
};

// Delete friend
export const deleteFriend = (id) => (dispatch) => {
  dispatch(setLoading());
  dispatch(
    asyncRequest(
      "DELETE",
      `${endpoint}/api/users/${id}/delete-friend`,
      null,
      userTypes.DELETE_FRIEND_SUCCESS,
      userTypes.DELETE_FRIEND_FAIL
    )
  );
};

// Set loading
export const setLoading = (bool = true) => (dispatch) => {
  dispatch({
    type: userTypes.SET_LOADING,
    payload: bool,
  });
};

export const setLoadingImage = () => (dispatch) => {
  dispatch({
    type: userTypes.SET_LOADING_IMAGE,
  });
};

// Clear all error
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: userTypes.CLEAR_ERRORS,
  });
};

// Handle auth request
const authPostRequest = (endpoint, formData, successType, failType) => async (
  dispatch
) => {
  dispatch(setLoading());
  try {
    const res = await axios.post(endpoint, formData);
    dispatch({
      type: successType,
      payload: res.data.token,
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch({
      type: failType,
      payload: error.response.data.error,
    });
  }
};
