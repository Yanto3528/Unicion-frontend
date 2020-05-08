import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import { createStructuredSelector } from "reselect";
import { selectUser } from "../../../redux/users/userSelector";

import AboutSection from "./AboutSection";

import { AboutGroupContainer, AboutGroup, AboutGroupValue } from "./AboutStyle";
import Card from "../../../styles/shared/Card";
import Subtitle from "../../../styles/shared/Subtitle";

const About = ({ user }) => {
  return (
    <Card>
      <AboutGroupContainer>
        <Subtitle>Contact Information</Subtitle>
        <AboutSection text="Email" value={user.email} noCap />
        {user.profile.phoneNumber && (
          <AboutSection text="Phone Number" value={user.profile.phoneNumber} />
        )}
        {user.profile.address && (
          <AboutSection text="Address" value={user.profile.address} />
        )}
        <Subtitle>Personal Information</Subtitle>
        {user.profile.birthDate && (
          <AboutSection
            text="Birthdate"
            value={moment(user.profile.birthDate).format("LL")}
          />
        )}
        {user.profile.gender && (
          <AboutSection text="Gender" value={user.profile.gender} />
        )}
        {user.profile.occupation && (
          <AboutSection text="Occupation" value={user.profile.occupation} />
        )}
        {user.profile.status && (
          <AboutSection text="Status" value={user.profile.status} />
        )}
        <AboutSection
          text="Joined"
          value={moment(user.profile.createdAt).format("LL")}
        />
      </AboutGroupContainer>
      {user.profile.bio && (
        <Fragment>
          <Subtitle>About</Subtitle>
          <AboutGroup>
            <AboutGroupValue>{user.profile.bio}</AboutGroupValue>
          </AboutGroup>
        </Fragment>
      )}
    </Card>
  );
};

About.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(About);
