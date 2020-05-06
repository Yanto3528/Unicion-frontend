import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  title,
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} title={title} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  loading: state.user.loading,
});

export default connect(mapStateToProps)(ProtectedRoute);
