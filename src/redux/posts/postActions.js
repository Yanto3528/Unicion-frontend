import postTypes from "./postTypes";
import axios from "axios";
import { endpoint } from "../../config/config";

import { asyncRequest, asyncRequestWithId } from "../utils/asyncRequest";

// Get posts
export const getPosts = (id = null) => (dispatch) => {
  dispatch(setLoadingPosts());
  let url = `${endpoint}/api/posts`;
  if (id) url = `${endpoint}/api/posts/${id}`;
  dispatch(
    asyncRequest(
      "GET",
      url,
      null,
      postTypes.GET_POSTS_SUCCESS,
      postTypes.GET_POSTS_FAIL
    )
  );
};

// Create new post
export const createPost = (text, imageFile) => async (dispatch) => {
  dispatch(setLoadingPosts());
  const formData = new FormData();
  if (imageFile) {
    formData.append("image", imageFile);
  }
  formData.append("text", text);
  dispatch(
    asyncRequest(
      "POST",
      `${endpoint}/api/posts`,
      formData,
      postTypes.ADD_POST_SUCCESS,
      postTypes.ADD_POST_FAIL
    )
  );
};

// Update post
export const updatePost = (text, imageFile, id) => (dispatch) => {
  dispatch(setLoadingPosts());
  const formData = new FormData();
  if (imageFile) formData.append("image", imageFile);
  formData.append("text", text);
  dispatch(
    asyncRequestWithId(
      "PUT",
      `${endpoint}/api/posts/${id}`,
      id,
      formData,
      postTypes.UPDATE_POST_SUCCESS,
      postTypes.UPDATE_POST_FAIL
    )
  );
};

export const likePost = (id) => (dispatch) => {
  dispatch(
    asyncRequestWithId(
      "PUT",
      `${endpoint}/api/posts/${id}/like`,
      id,
      null,
      postTypes.LIKE_UNLIKE_POST_SUCCESS,
      postTypes.LIKE_UNLIKE_POST_FAIL
    )
  );
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  dispatch(setLoadingPosts());
  try {
    await axios.delete(`${endpoint}/api/posts/${id}`);
    dispatch({
      type: postTypes.DELETE_POST_SUCCESS,
      payload: id,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: postTypes.POST_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const setLoadingPosts = (bool = true) => (dispatch) => {
  dispatch({
    type: postTypes.SET_LOADING_POSTS,
    payload: bool,
  });
};
