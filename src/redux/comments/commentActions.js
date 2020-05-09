import commentTypes from "./commentTypes";
import axios from "axios";

import { asyncRequestWithId } from "../utils/asyncRequest";

// Add comment
export const addComment = (text, postId) => async (dispatch) => {
  dispatch(setLoadingComments(postId));
  dispatch(
    asyncRequestWithId(
      "POST",
      `/api/posts/${postId}/comments`,
      postId,
      text,
      commentTypes.ADD_COMMENT_SUCCESS,
      commentTypes.ADD_COMMENT_FAIL
    )
  );
};

// Update Comment
export const updateComment = (text, id, postId) => async (dispatch) => {
  dispatch(setLoadingComments(postId));
  try {
    const res = await axios.put(`/api/comments/${id}`, text);
    dispatch({
      type: commentTypes.UPDATE_COMMENT_SUCCESS,
      payload: { res: res.data.data, id, postId },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: commentTypes.UPDATE_COMMENT_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Like / Unlike a comment
export const likeUnlikeComment = (id, postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/comments/${id}/like`);
    dispatch({
      type: commentTypes.LIKE_UNLIKE_COMMENT_SUCCESS,
      payload: { res: res.data.data, id, postId },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: commentTypes.LIKE_UNLIKE_COMMENT_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Delete comment
export const deleteComment = (id, postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/comments/${id}`);
    dispatch({
      type: commentTypes.DELETE_COMMENT_SUCCESS,
      payload: { id, postId },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: commentTypes.DELETE_COMMENT_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Set loading for comment
export const setLoadingComments = (id) => (dispatch) => {
  dispatch({
    type: commentTypes.SET_LOADING_COMMENTS,
    payload: id,
  });
};
