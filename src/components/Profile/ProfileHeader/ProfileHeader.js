import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadCoverImage } from "../../../redux/users/userActions";

import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectUser,
  selectLoadingImage,
} from "../../../redux/users/userSelector";

import {
  ProfileHeaderContainer,
  ProfileCoverPhoto,
  ProfileHeaderUploadContainer,
} from "./ProfileHeaderStyle";
import Avatar from "../../shared/Avatar/Avatar";
import Title from "../../shared/Title/Title";
import InputFile from "../../shared/InputFile/InputFile";
import Spinner from "../../shared/Spinner/Spinner";

import Body from "../../../styles/shared/Body";
import { EditImageIcon } from "../../../styles/shared/Icons";

const ProfileHeader = ({ user, currentUser, loading, uploadCoverImage }) => {
  const onChange = async (event) => {
    if (event.target.files && event.target.files.length !== 0) {
      await uploadCoverImage(currentUser.profile._id, event.target.files[0]);
    }
  };

  return (
    <ProfileHeaderContainer>
      {loading && <Spinner center transparent />}
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
        {user.profile.name}
      </Title>
      {user.profile.location && <Body>{user.profile.location.city}</Body>}
    </ProfileHeaderContainer>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  uploadCoverImage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  currentUser: selectCurrentUser,
  loading: selectLoadingImage,
});

export default connect(mapStateToProps, { uploadCoverImage })(ProfileHeader);
