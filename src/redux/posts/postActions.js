import postTypes from "./postTypes";
import axios from "axios";

import { asyncRequest, asyncRequestWithId } from "../utils/asyncRequest";

// Get posts
export const getPosts = (id = null) => (dispatch) => {
  dispatch(setLoadingPosts());
  let endpoint = "/api/posts";
  if (id) endpoint = `/api/posts/${id}`;
  dispatch(
    asyncRequest(
      "GET",
      endpoint,
      null,
      postTypes.GET_POSTS_SUCCESS,
      postTypes.GET_POSTS_FAIL
    )
  );
};

// Create new post
export const createPost = (text, imageFile) => (dispatch) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append("image", imageFile);
  }
  formData.append("text", text);
  dispatch(
    asyncRequest(
      "POST",
      `/api/posts`,
      formData,
      postTypes.ADD_POST_SUCCESS,
      postTypes.ADD_POST_FAIL
    )
  );
};

// Update post
export const updatePost = (text, imageFile, id) => (dispatch) => {
  const formData = new FormData();
  if (imageFile) formData.append("image", imageFile);
  formData.append("text", text);
  dispatch(
    asyncRequestWithId(
      "PUT",
      `/api/posts/${id}`,
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
      `/api/posts/${id}/like`,
      id,
      null,
      postTypes.LIKE_UNLIKE_POST_SUCCESS,
      postTypes.LIKE_UNLIKE_POST_FAIL
    )
  );
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);
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
