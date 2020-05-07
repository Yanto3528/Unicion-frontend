import React from "react";
import { connect } from "react-redux";

import Spinner from "../../Spinner/Spinner";

const withSpinner = (WrappedComponent) => {
  const Component = ({ data, loading, ...props }) =>
    data && !loading ? <WrappedComponent {...props} /> : <Spinner />;
  return Component;
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
});

export default connect(mapStateToProps)(withSpinner);
