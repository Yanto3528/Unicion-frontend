import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, clearErrors } from "../../../redux/users/userActions";
import { setAlert } from "../../../redux/alerts/alertActions";

import { createStructuredSelector } from "reselect";
import {
  selectIsAuthenticated,
  selectLoading,
  selectUserError,
} from "../../../redux/users/userSelector";

import { AuthFormContainer } from "../../../styles/shared/AuthForm";
import { Input, InputContainer } from "../../../styles/shared/Input";
import Button from "../../../components/shared/Button/Button";

const LoginForm = ({
  isAuthenticated,
  loading,
  error,
  history,
  login,
  setAlert,
  clearErrors,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard/newsfeed");
    }
  }, [isAuthenticated, history]);

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, setAlert, clearErrors]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <AuthFormContainer onSubmit={onSubmit}>
      <InputContainer>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={onChange}
          required
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={onChange}
          required
        />
      </InputContainer>
      <Button block loading={loading}>
        Login
      </Button>
    </AuthFormContainer>
  );
};

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
  loading: selectLoading,
  error: selectUserError,
});

export default withRouter(
  connect(mapStateToProps, { login, setAlert, clearErrors })(LoginForm)
);
