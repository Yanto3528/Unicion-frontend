import React from "react";

import Spinner from "../../Spinner/Spinner";

const withSpinner = (WrappedComponent) => {
  const Component = ({ loading, ...props }) =>
    loading ? <Spinner /> : <WrappedComponent {...props} />;
  return Component;
};

export default withSpinner;
