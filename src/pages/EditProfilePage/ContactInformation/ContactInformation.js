import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateProfile, clearErrors } from "../../../redux/users/userActions";
import { setAlert } from "../../../redux/alerts/alertActions";

import Title from "../../../components/shared/Title/Title";
import Button from "../../../components/shared/Button/Button";
import Alert from "../../../components/Alert/Alert";

import Card from "../../../styles/shared/Card";
import { InputContainer, Input } from "../../../styles/shared/Input";
import Form from "../../../styles/shared/Form";

const ContactInformation = ({
  user: {
    error,
    msg,
    loading,
    currentUser: { profile },
  },
  updateProfile,
  setAlert,
  clearErrors,
}) => {
  const [formData, setFormData] = useState({
    phoneNumber: profile.phoneNumber,
    website: profile.website,
  });
  const { phoneNumber, website } = formData;

  useEffect(() => {
    if (error) setAlert(error, "danger");
    if (msg) setAlert(msg, "success");
    clearErrors();
  }, [error, msg, clearErrors, setAlert]);

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    updateProfile(profile._id, formData);
  };

  return (
    <Card pd="0">
      <Title pd="2rem" mb="0">
        Contact Information
      </Title>
      <Form onSubmit={onSubmit}>
        <Alert />
        <InputContainer>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="website">Website</label>
          <Input
            type="text"
            id="website"
            name="website"
            placeholder="Enter your website"
            value={website}
            onChange={onChange}
          />
        </InputContainer>
        <Button loading={loading}>Save changes</Button>
      </Form>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  updateProfile,
  setAlert,
  clearErrors,
})(ContactInformation);
