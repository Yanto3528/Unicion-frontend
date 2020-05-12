import { createSelector } from "reselect";

const selectMenuState = (state) => state.menu;

export const selectIsMenuOpen = createSelector(
  [selectMenuState],
  (menu) => menu
);
