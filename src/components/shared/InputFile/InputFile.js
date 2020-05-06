import React from "react";

import { InputFileContainer } from "./InputFileStyle";

const InputFile = ({ children, id, size, roundedIcon, padding, ...props }) => {
  return (
    <InputFileContainer size={size} roundedIcon={roundedIcon} padding={padding}>
      <label htmlFor={id}>{children}</label>
      <input type="file" id={id} {...props} />
    </InputFileContainer>
  );
};

export default InputFile;
