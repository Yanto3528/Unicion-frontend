import React from "react";
import PropTypes from "prop-types";

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

AuthFormHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default AuthFormHeader;
