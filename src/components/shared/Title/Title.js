import React from "react";

import { TitleContainer } from "./TitleStyle";

const Title = (props) => {
  return (
    <TitleContainer {...props}>
      <h1>{props.children}</h1>
    </TitleContainer>
  );
};

export default Title;
