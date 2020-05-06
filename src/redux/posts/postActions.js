import postTypes from "./postTypes";
import axios from "axios";

// Get posts
export const getPosts = (id = null) => async (dispatch) => {
  dispatch(setLoadingPosts());
  let endpoint = "/api/posts";
  if (id) endpoint = `/api/posts/${id}`;
  try {
    const res = await axios.get(endpoint);
    dispatch({
      type: postTypes.GET_POSTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: postTypes.POST_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Create new post
export const createPost = (text, imageFile) => async (dispatch) => {
  dispatch(setLoadingPosts());
  const formData = new FormData();
  if (imageFile) {
    formData.append("image", imageFile);
  }
  formData.append("text", text);
  try {
    const res = await axios.post("/api/posts", formData);
    dispatch({
      type: postTypes.ADD_POST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: postTypes.POST_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Update post
export const updatePost = (text, imageFile, id) => async (dispatch) => {
  dispatch(handlePostRequest(text, imageFile, id));
};

export const likePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/${id}/like`);
    dispatch({
      type: postTypes.LIKE_UNLIKE_POST_SUCCESS,
      payload: { res: res.data.data, id },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: postTypes.POST_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  dispatch(setLoadingPosts());
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

// Utils Function
const handlePostRequest = (text, file, id = null) => async (dispatch) => {
  dispatch(setLoadingPosts());
  const formData = new FormData();
  if (file) formData.append("image", file);
  formData.append("text", text);
  try {
    let res;
    if (id === null) {
      res = await axios.post(`/api/posts`, formData);
      dispatch({
        type: postTypes.ADD_POST_SUCCESS,
        payload: res.data.data,
      });
    } else {
      res = await axios.put(`/api/posts/${id}`, formData);
      dispatch({
        type: postTypes.UPDATE_POST_SUCCESS,
        payload: { res: res.data.data, id },
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: postTypes.POST_FAIL,
      payload: error.response.data.error,
    });
  }
};
