import React from "react";

import { ButtonContainer } from "./ButtonStyle";
import { SpinnerIcon } from "../../../styles/shared/Icons";

const Button = ({ loading, children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {loading ? <SpinnerIcon size="1.4rem" /> : children}
    </ButtonContainer>
  );
};

export default Button;
