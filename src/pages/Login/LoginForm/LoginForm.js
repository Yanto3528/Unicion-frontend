import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../redux/users/userActions";

import { AuthFormContainer } from "../../../styles/shared/AuthForm";
import { Input, InputContainer } from "../../../styles/shared/Input";
import Button from "../../../styles/shared/Button";

const LoginForm = ({ login, isAuthenticated, history }) => {
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
      <Button block>Login</Button>
    </AuthFormContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, { login })(LoginForm));
