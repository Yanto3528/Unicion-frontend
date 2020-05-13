import { createSelector } from "reselect";

const selectPostState = (state, props) => state.post;

export const selectPosts = createSelector(
  [selectPostState],
  (post) => post.posts
);

export const selectLoadingPosts = createSelector(
  [selectPostState],
  (post) => post.loadingPosts
);

export const selectPostError = createSelector(
  [selectPostState],
  (post) => post.error
);
