import React from "react";
import { connect } from "react-redux";

import Body from "../../styles/shared/Body";
import { AlertContainer } from "./AlertStyle";
import { CheckCircleIcon, CloseCircleIcon } from "../../styles/shared/Icons";

const Alert = ({ alerts }) => {
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertContainer type={alert.type}>
        {alert.type === "danger" ? <CloseCircleIcon /> : <CheckCircleIcon />}
        <Body>{alert.msg}</Body>
      </AlertContainer>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alert);
