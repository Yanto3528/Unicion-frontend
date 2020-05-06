import React, { Fragment } from "react";
import { connect } from "react-redux";

import moment from "moment";

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
          <AboutSection text="Birthdate" value={user.profile.birthDate} />
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
            <AboutGroupValue>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              finibus orci nibh, sed ornare ante dignissim at. Donec dictum,
              orci vitae mollis placerat, augue neque posuere sem, ornare
              vehicula nisl nibh vel ante. Curabitur pellentesque fermentum
              ornare. Aenean at purus sit amet dui ullamcorper porttitor. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus
              orci nibh, sed ornare ante dignissim at. Donec dictum, orci vitae
              mollis placerat, augue neque posuere sem, ornare vehicula nisl
              nibh vel ante. Curabitur pellentesque fermentum ornare. Aenean at
              purus sit amet dui ullamcorper porttitor.
            </AboutGroupValue>
          </AboutGroup>
        </Fragment>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(About);
