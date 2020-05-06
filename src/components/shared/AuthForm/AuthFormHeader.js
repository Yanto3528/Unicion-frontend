import React from "react";

import Title from "../Title/Title";

import { AuthFormHeaderContainer } from "./AuthFormHeaderStyle";
import Body from "../../../styles/shared/Body";

const AuthFormHeader = ({ title, subtitle }) => {
  return (
    <AuthFormHeaderContainer>
      <Title nb pd="0" center>
        {title}
      </Title>
      <Body center>{subtitle}</Body>
    </AuthFormHeaderContainer>
  );
};

export default AuthFormHeader;
