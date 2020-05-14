import { createSelector } from "reselect";

const selectUserState = (state) => state.user;

export const selectIsAuthenticated = createSelector(
  [selectUserState],
  (user) => user.isAuthenticated
);

export const selectLoading = createSelector(
  [selectUserState],
  (user) => user.loading
);

export const selectLoadingImage = createSelector(
  [selectUserState],
  (user) => user.loadingImage
);

export const selectUser = createSelector(
  [selectUserState],
  (user) => user.user
);

export const selectCurrentUser = createSelector(
  [selectUserState],
  (user) => user.currentUser
);

export const selectUsers = createSelector(
  [selectUserState],
  (user) => user.users
);

export const selectFriendRequests = createSelector(
  [selectUserState],
  (user) => user.friendRequests
);

export const selectUserError = createSelector(
  [selectUserState],
  (user) => user.error
);

export const selectUserMessage = createSelector(
  [selectUserState],
  (user) => user.msg
);
