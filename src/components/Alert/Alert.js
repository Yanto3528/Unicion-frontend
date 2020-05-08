import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAlerts } from "../../redux/alerts/alertSelector";

import Body from "../../styles/shared/Body";
import { AlertContainer } from "./AlertStyle";
import { CheckCircleIcon, CloseCircleIcon } from "../../styles/shared/Icons";

const Alert = ({ alerts }) => {
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertContainer key={alert.id} type={alert.type}>
        {alert.type === "danger" ? <CloseCircleIcon /> : <CheckCircleIcon />}
        <Body>{alert.msg}</Body>
      </AlertContainer>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  alerts: selectAlerts,
});

export default connect(mapStateToProps)(Alert);
