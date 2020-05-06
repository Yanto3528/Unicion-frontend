import postTypes from "./postTypes";
import commentTypes from "../comments/commentTypes";

const initialState = {
  posts: [],
  loadingPosts: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loadingPosts: false,
        error: null,
      };
    case postTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loadingPosts: false,
        error: null,
      };
    case postTypes.UPDATE_POST_SUCCESS:
    case postTypes.LIKE_UNLIKE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.id ? action.payload.res : post
        ),
        loadingPosts: false,
        error: null,
      };
    case postTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        loadingPosts: false,
        error: null,
      };
    case postTypes.POST_FAIL:
      return {
        ...state,
        posts: [],
        loadingPosts: false,
        error: action.payload,
      };
    case commentTypes.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.id
            ? {
                ...post,
                loadingComments: false,
                comments: [...post.comments, action.payload.res],
              }
            : post
        ),
        error: null,
      };
    case commentTypes.UPDATE_COMMENT_SUCCESS:
    case commentTypes.LIKE_UNLIKE_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? {
                ...post,
                loadingComments: false,
                comments: post.comments.map((comment) =>
                  comment._id === action.payload.id
                    ? action.payload.res
                    : comment
                ),
              }
            : post
        ),
        error: null,
      };
    case commentTypes.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? {
                ...post,
                loadingComments: false,
                comments: post.comments.filter(
                  (comment) => comment._id !== action.payload.id
                ),
              }
            : post
        ),
        error: null,
      };
    case commentTypes.ADD_COMMENT_FAIL:
    case commentTypes.UPDATE_COMMENT_FAIL:
    case commentTypes.DELETE_COMMENT_FAIL:
    case commentTypes.LIKE_UNLIKE_COMMENT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case postTypes.SET_LOADING_POSTS:
      return {
        ...state,
        loadingPosts: action.payload,
      };
    case commentTypes.SET_LOADING_COMMENTS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload
            ? { ...post, loadingComments: true }
            : post
        ),
      };
    default:
      return state;
  }
};
