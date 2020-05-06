import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../../redux/users/userActions";

import { DateSingleInput } from "@datepicker-react/styled";

import { AuthFormContainer } from "../../../styles/shared/AuthForm";
import {
  Input,
  InputContainer,
  Select,
  Option,
} from "../../../styles/shared/Input";
import Button from "../../../styles/shared/Button";

const RegisterForm = ({ register, isAuthenticated, history }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    date: null,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { firstName, lastName, email, password, password2, date } = formData;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard/newsfeed");
    }
  }, [isAuthenticated, history]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onDateChange = (data) => setFormData({ ...formData, date: data.date });
  const onFocusChange = (focusedInput) => setShowDatePicker(focusedInput);

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== password2) {
      return console.log("Password do not match");
    }
    register(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <AuthFormContainer onSubmit={onSubmit}>
      <InputContainer half>
        <label htmlFor="firstName">First Name</label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          value={firstName}
          onChange={onChange}
          required
        />
      </InputContainer>
      <InputContainer half>
        <label htmlFor="lastName">Last Name</label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          value={lastName}
          onChange={onChange}
          required
        />
      </InputContainer>
      <InputContainer half>
        <label htmlFor="firstName">Status</label>
        {/* <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          value={firstName}
          onChange={onChange}
          required
        /> */}
        <Select></Select>
      </InputContainer>
      <InputContainer half>
        <label htmlFor="lastName">Date of Birth</label>
        {/* <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          value={lastName}
          onChange={onChange}
          required
        /> */}
        <DateSingleInput
          onDateChange={onDateChange}
          onFocusChange={onFocusChange}
          date={date}
          showDatepicker={showDatePicker}
        />
      </InputContainer>
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
      <InputContainer>
        <label htmlFor="password2">Confirm Password</label>
        <Input
          type="password"
          id="password2"
          name="password2"
          placeholder="Confirm your password"
          value={password2}
          onChange={onChange}
          required
        />
      </InputContainer>
      <Button block>Create account</Button>
    </AuthFormContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, { register })(RegisterForm));
