import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changePassword, clearErrors } from "../../../redux/users/userActions";
import { setAlert } from "../../../redux/alerts/alertActions";

import { createStructuredSelector } from "reselect";
import {
  selectUserError,
  selectUserMessage,
  selectLoading,
} from "../../../redux/users/userSelector";

import Title from "../../../components/shared/Title/Title";
import Button from "../../../components/shared/Button/Button";
import Alert from "../../../components/Alert/Alert";

import Card from "../../../styles/shared/Card";
import { InputContainer, Input } from "../../../styles/shared/Input";
import Form from "../../../styles/shared/Form";

const ChangePassword = ({
  error,
  msg,
  loading,
  changePassword,
  setAlert,
  clearErrors,
}) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    newPassword2: "",
  });
  const { currentPassword, newPassword, newPassword2 } = formData;

  useEffect(() => {
    if (error) setAlert(error, "danger");
    if (msg) setAlert(msg, "success");
    clearErrors();
  }, [error, msg, clearErrors, setAlert]);

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== newPassword2)
      return setAlert("New password do not match", "danger");
    changePassword(formData);
    setFormData({
      currentPassword: "",
      newPassword: "",
      newPassword2: "",
    });
  };

  return (
    <Card pd="0">
      <Title pd="2rem" mb="0">
        Change Password
      </Title>
      <Form onSubmit={onSubmit}>
        <Alert />
        <InputContainer>
          <label htmlFor="currentPassword">Current Password</label>
          <Input
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder="Enter your current password"
            value={currentPassword}
            onChange={onChange}
            minLength="6"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="newPassword">New Password</label>
          <Input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={onChange}
            minLength="6"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="newPassword2">Confirm New Password</label>
          <Input
            type="password"
            id="newPassword2"
            name="newPassword2"
            placeholder="Confirm your new password"
            value={newPassword2}
            onChange={onChange}
            minLength="6"
            required
          />
        </InputContainer>
        <Button loading={loading}>Save changes</Button>
      </Form>
    </Card>
  );
};

ChangePassword.propTypes = {
  error: PropTypes.string,
  msg: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  changePassword: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  error: selectUserError,
  loading: selectLoading,
  msg: selectUserMessage,
});

export default connect(mapStateToProps, {
  changePassword,
  setAlert,
  clearErrors,
})(ChangePassword);
