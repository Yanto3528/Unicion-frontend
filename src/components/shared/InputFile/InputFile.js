import React from "react";
import PropTypes from "prop-types";

import { InputFileContainer } from "./InputFileStyle";

const InputFile = ({ children, id, size, roundedIcon, padding, ...props }) => {
  return (
    <InputFileContainer size={size} roundedIcon={roundedIcon} padding={padding}>
      <label htmlFor={id}>{children}</label>
      <input type="file" id={id} {...props} />
    </InputFileContainer>
  );
};

InputFile.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  roundedIcon: PropTypes.bool,
  padding: PropTypes.string,
};

export default InputFile;
