import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import { createStructuredSelector } from "reselect";
import { selectUser } from "../../../redux/users/userSelector";

import Title from "../../shared/Title/Title";

import {
  ProfileOverviewContainer,
  ProfileOverviewTextGroup,
  ProfileOverviewTitle,
} from "./ProfileOverviewStyle";
import Card from "../../../styles/shared/Card";
import Body from "../../../styles/shared/Body";

const ProfileOverview = ({ user }) => {
  return (
    <ProfileOverviewContainer>
      <Card>
        <Title pd="0">Profile Intro</Title>
        {user.profile.bio && (
          <ProfileOverviewTextGroup>
            <ProfileOverviewTitle>About me</ProfileOverviewTitle>
            <Body>{user.profile.bio}</Body>
          </ProfileOverviewTextGroup>
        )}
        {user.profile.birthDate && (
          <ProfileOverviewTextGroup>
            <ProfileOverviewTitle>Birth Date</ProfileOverviewTitle>
            <Body>{moment(user.profile.birthDate).format("LL")}</Body>
          </ProfileOverviewTextGroup>
        )}
        {user.profile.location && (
          <ProfileOverviewTextGroup>
            <ProfileOverviewTitle>Current City</ProfileOverviewTitle>
            <Body>{user.profile.location.city}</Body>
          </ProfileOverviewTextGroup>
        )}
      </Card>
    </ProfileOverviewContainer>
  );
};

ProfileOverview.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(ProfileOverview);
