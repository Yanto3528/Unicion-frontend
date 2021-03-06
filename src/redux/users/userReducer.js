import userTypes from "./userTypes";

const initialState = {
  token: localStorage.getItem("token"),
  currentUser: null,
  user: null,
  users: null,
  friendRequests: [],
  isAuthenticated: false,
  loading: true,
  loadingImage: false,
  error: null,
  msg: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.map((profile) => profile.user),
        loading: false,
        error: null,
      };
    case userTypes.GET_USERS_FRIENDS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case userTypes.GET_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        friendRequests: action.payload,
        loading: false,
        error: null,
      };
    case userTypes.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case userTypes.USER_LOADED:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case userTypes.REGISTER_SUCCESS:
    case userTypes.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case userTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        users: [],
        currentUser: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    case userTypes.ADD_FRIEND_REQUEST:
      return {
        ...state,
        friendRequests: [action.payload, ...state.friendRequests],
        error: null,
      };
    case userTypes.SEND_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
        loading: false,
        error: null,
      };
    case userTypes.ACCEPT_FRIEND_REQUEST_SUCCESS:
    case userTypes.DELETE_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.res,
        friendRequests: state.friendRequests.filter(
          (user) => user._id !== action.payload.id
        ),
        loading: false,
        error: null,
      };
    case userTypes.DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case userTypes.UPLOAD_COVER_PHOTO_SUCCESS:
      return {
        ...state,
        user: { ...state.user, profile: action.payload },
        loadingImage: false,
        error: null,
      };
    case userTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        user: { ...state.user, profile: action.payload.res },
        loading: false,
        error: null,
        msg: action.payload.msg,
      };
    case userTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        msg: action.payload,
        loading: false,
        error: null,
      };
    case userTypes.DELETE_FRIEND_REQUEST_FAIL:
    case userTypes.ACCEPT_FRIEND_REQUEST_FAIL:
    case userTypes.DELETE_FRIEND_FAIL:
    case userTypes.UPLOAD_COVER_PHOTO_FAIL:
    case userTypes.UPDATE_PROFILE_FAIL:
    case userTypes.CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        loadingImage: false,
        error: action.payload,
      };
    case userTypes.GET_USERS_FRIENDS_FAIL:
    case userTypes.GET_FRIEND_REQUEST_FAIL:
    case userTypes.SEARCH_USERS_FAIL:
      return {
        ...state,
        users: null,
        loading: false,
        error: action.payload,
      };
    case userTypes.GET_USER_BY_ID_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case userTypes.REGISTER_FAIL:
    case userTypes.LOGIN_FAIL:
    case userTypes.AUTH_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        currentUser: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case userTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case userTypes.SET_LOADING_IMAGE:
      return {
        ...state,
        loadingImage: true,
      };
    case userTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        msg: null,
      };
    default:
      return state;
  }
};
