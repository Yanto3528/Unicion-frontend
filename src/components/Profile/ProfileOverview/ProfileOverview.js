import React from "react";
import { connect } from "react-redux";

import moment from "moment";

import Title from "../../shared/Title/Title";

import {
  ProfileOverviewTextGroup,
  ProfileOverviewTitle,
} from "./ProfileOverviewStyle";
import Card from "../../../styles/shared/Card";
import Body from "../../../styles/shared/Body";

const ProfileOverview = ({ user }) => {
  return (
    <Card>
      <Title pd="0" size="sm">
        Profile Intro
      </Title>
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
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(ProfileOverview);
