import React from "react";
import { connect } from "react-redux";
import { uploadCoverImage } from "../../../redux/users/userActions";

import {
  ProfileHeaderContainer,
  ProfileCoverPhoto,
  ProfileHeaderUploadContainer,
} from "./ProfileHeaderStyle";
import Avatar from "../../shared/Avatar/Avatar";
import Title from "../../shared/Title/Title";
import InputFile from "../../shared/InputFile/InputFile";

import Body from "../../../styles/shared/Body";
import { EditImageIcon } from "../../../styles/shared/Icons";

const ProfileHeader = ({ user, currentUser, uploadCoverImage }) => {
  const onChange = (event) => {
    if (event.target.files && event.target.files.length !== 0) {
      uploadCoverImage(currentUser.profile._id, event.target.files[0]);
    }
  };

  return (
    <ProfileHeaderContainer>
      <ProfileCoverPhoto src={user.profile.coverPhoto}>
        <Avatar whiteBG src={user.profile.avatar} size="12rem" />
        {currentUser._id === user._id && (
          <ProfileHeaderUploadContainer>
            <InputFile
              size="2rem"
              roundedIcon
              id="upload-cover"
              onChange={onChange}
            >
              <EditImageIcon />
            </InputFile>
          </ProfileHeaderUploadContainer>
        )}
      </ProfileCoverPhoto>
      <Title nb center size="md">
        {`${user.profile.firstName} ${user.profile.lastName}`}
      </Title>
      {user.profile.location && <Body>{user.profile.location.city}</Body>}
    </ProfileHeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { uploadCoverImage })(ProfileHeader);
