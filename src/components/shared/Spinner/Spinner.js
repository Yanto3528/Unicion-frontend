import React from "react";

import { SpinnerIcon } from "../../../styles/shared/Icons";
import { SpinnerContainer } from "./SpinnerStyle";

const Spinner = (props) => {
  return (
    <SpinnerContainer {...props}>
      <SpinnerIcon />
    </SpinnerContainer>
  );
};

export default Spinner;
