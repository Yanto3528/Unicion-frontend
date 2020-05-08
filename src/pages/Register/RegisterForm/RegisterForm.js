import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register, clearErrors } from "../../../redux/users/userActions";
import { setAlert } from "../../../redux/alerts/alertActions";

import { createStructuredSelector } from "reselect";
import {
  selectIsAuthenticated,
  selectLoading,
  selectUserError,
} from "../../../redux/users/userSelector";

import DatePicker from "react-datepicker";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { AuthFormContainer } from "../../../styles/shared/AuthForm";
import {
  Input,
  InputContainer,
  Select,
  Option,
} from "../../../styles/shared/Input";
import Button from "../../../components/shared/Button/Button";

import "react-datepicker/dist/react-datepicker.css";

const RegisterForm = ({
  isAuthenticated,
  loading,
  error,
  history,
  register,
  setAlert,
  clearErrors,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    gender: "male",
    country: "",
    state: "",
    birthDate: null,
  });
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    gender,
    birthDate,
    country,
    state,
  } = formData;

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
  }, [error, clearErrors, setAlert]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onDateChange = (date) => setFormData({ ...formData, birthDate: date });
  const onSelectCountry = (val) => {
    setFormData({ ...formData, country: val });
  };
  const onSelectState = (val) => setFormData({ ...formData, state: val });

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      country === "" ||
      state === "" ||
      address === "" ||
      birthDate === null ||
      gender === "" ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return console.log("Please fill out the form");
    }
    setFormData({
      ...formData,
      address: `${address}, ${state}, ${country}`,
    });
    register(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      country: "",
      state: "",
      gender: "male",
      birthDate: null,
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
          minLength="6"
          required
        />
      </InputContainer>
      <InputContainer half>
        <label htmlFor="gender">Gender</label>
        <Select value={gender} onChange={onChange} name="gender" id="gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </InputContainer>
      <InputContainer half>
        <label htmlFor="birthDate">Date of Birth</label>
        <DatePicker
          selected={birthDate}
          onChange={onDateChange}
          calendarClassName="calender-picker"
          id="birthDate"
          showYearDropdown
        />
      </InputContainer>
      <InputContainer half>
        <label htmlFor="country">Country</label>
        <CountryDropdown
          value={country}
          onChange={onSelectCountry}
          id="country"
        />
      </InputContainer>
      <InputContainer half>
        <label htmlFor="state">State</label>
        <RegionDropdown
          country={country}
          value={state}
          onChange={onSelectState}
          id="state"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="address">Address</label>
        <Input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your street address (ex. 123 street road)"
          value={address}
          onChange={onChange}
          required
        />
      </InputContainer>
      <Button block loading={loading}>
        Create account
      </Button>
    </AuthFormContainer>
  );
};

RegisterForm.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  history: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
  loading: selectLoading,
  error: selectUserError,
});

export default withRouter(
  connect(mapStateToProps, { register, setAlert, clearErrors })(RegisterForm)
);
