import { createSelector } from "reselect";

const selectAlertState = (state) => state.alerts;

export const selectAlerts = createSelector(
  [selectAlertState],
  (alerts) => alerts
);
