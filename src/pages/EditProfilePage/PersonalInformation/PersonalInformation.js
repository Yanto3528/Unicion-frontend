import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateProfile, clearErrors } from "../../../redux/users/userActions";
import { setAlert } from "../../../redux/alerts/alertActions";

import Title from "../../../components/shared/Title/Title";
import Avatar from "../../../components/shared/Avatar/Avatar";
import InputFile from "../../../components/shared/InputFile/InputFile";
import Button from "../../../components/shared/Button/Button";
import Alert from "../../../components/Alert/Alert";
import DatePicker from "react-datepicker";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import {
  PersoanlInformationHeader,
  UploadAvatarContainer,
  UploadIconContainer,
} from "./PersonalInformationStyle";
import Card from "../../../styles/shared/Card";
import Form from "../../../styles/shared/Form";
import { EditImageIcon } from "../../../styles/shared/Icons";
import {
  Input,
  Textarea,
  InputContainer,
  InputParentContainer,
  Select,
  Option,
} from "../../../styles/shared/Input";

import getCountryName from "../../../utils/getCountryName";
import "react-datepicker/dist/react-datepicker.css";

const PersonalInformation = ({
  user: {
    currentUser: { profile },
    error,
    loading,
    msg,
  },
  updateProfile,
  setAlert,
  clearErrors,
}) => {
  const [formData, setFormData] = useState({
    firstName: profile.name.split(" ")[0],
    lastName: profile.name.split(" ")[1],
    country: getCountryName(profile.location.country),
    state: profile.location.state,
    address: profile.address,
    occupation: profile.occupation || "",
    status: profile.status || "",
    gender: profile.gender,
    birthDate: profile.birthDate && new Date(profile.birthDate),
    bio: profile.bio || "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(profile.avatar);
  const {
    firstName,
    lastName,
    country,
    state,
    address,
    gender,
    birthDate,
    occupation,
    bio,
    status,
  } = formData;

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    if (msg) {
      setAlert(msg, "success");
      clearErrors();
    }
  }, [error, msg, setAlert, clearErrors]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onChangeFile = (event) => {
    if (event.target.files) {
      if (event.target.files[0].size >= 1024 * 1000) {
        return setAlert(
          "Image file size should not be greater than 1mb",
          "danger"
        );
      }
      if (event.target.files.length !== 0) {
        setImagePreview(URL.createObjectURL(event.target.files[0]));
        setImageFile(event.target.files[0]);
      }
    }
  };

  const onDateChange = (date) => setFormData({ ...formData, birthDate: date });
  const onSelectCountry = (val) => {
    setFormData({ ...formData, country: val });
  };
  const onSelectState = (val) => setFormData({ ...formData, state: val });

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      country === "" ||
      state === "" ||
      address === "" ||
      gender === "" ||
      birthDate === null
    ) {
      return console.log("Please fill out the form");
    }
    updateProfile(profile._id, formData, imageFile);
  };
  return (
    <Card pd="0">
      <Title pd="2rem" mb="0">
        Personal Information
      </Title>
      <Form onSubmit={onSubmit}>
        <Alert />
        <PersoanlInformationHeader>
          <UploadAvatarContainer>
            <Avatar src={imagePreview} size="10rem" />
            <UploadIconContainer>
              <InputFile
                roundedIcon
                size="2rem"
                id="upload-avatar"
                onChange={onChangeFile}
              >
                <EditImageIcon />
              </InputFile>
            </UploadIconContainer>
          </UploadAvatarContainer>
        </PersoanlInformationHeader>
        <InputParentContainer>
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
        </InputParentContainer>
        <InputParentContainer>
          <InputContainer half>
            <label htmlFor="gender">Gender</label>
            <Select
              value={gender}
              onChange={onChange}
              name="gender"
              id="gender"
            >
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
        </InputParentContainer>
        <InputParentContainer>
          <InputContainer half>
            <label htmlFor="status">Status</label>
            <Select
              value={status}
              onChange={onChange}
              name="status"
              id="status"
            >
              <Option value="single">Single</Option>
              <Option value="relationship">In a relationship</Option>
              <Option value="married">Married</Option>
            </Select>
          </InputContainer>
          <InputContainer half>
            <label htmlFor="occupation">Occupation</label>
            <Input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Enter your occupation"
              value={occupation}
              onChange={onChange}
              required
            />
          </InputContainer>
        </InputParentContainer>
        <InputParentContainer>
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
        </InputParentContainer>
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
        <InputContainer>
          <label htmlFor="bio">About</label>
          <Textarea
            type="text"
            id="bio"
            name="bio"
            rows={4}
            placeholder="Write something about yourself"
            value={bio}
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
})(PersonalInformation);
