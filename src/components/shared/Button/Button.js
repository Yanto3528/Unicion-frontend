import React from "react";
import PropTypes from "prop-types";

import { ButtonContainer } from "./ButtonStyle";
import { SpinnerIcon } from "../../../styles/shared/Icons";

const Button = ({ loading, children, ...props }) => {
  return (
    <ButtonContainer {...props} disabled={loading}>
      {loading ? <SpinnerIcon size="1.4rem" /> : children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
};

export default Button;
