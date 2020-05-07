import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import ProfileNav from "../../components/Profile/ProfileNav/ProfileNav";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import ChangePassword from "./ChangePassword/ChangePassword";
import ContactInformation from "./ContactInformation/ContactInformation";
import Spinner from "../../components/shared/Spinner/Spinner";

import { EditProfileContainer } from "./EditProfilePageStyle";

const EditProfilePage = ({ currentUser, match }) => {
  const [links] = useState([
    {
      id: 1,
      url: `${match.path}/personal-information`,
      title: "Personal Information",
    },
    {
      id: 2,
      url: `${match.path}/change-password`,
      title: "Change Password",
    },
    {
      id: 3,
      url: `${match.path}/contact-information`,
      title: "Contact Information",
    },
  ]);

  if (!currentUser) return <Spinner center />;
  return (
    <EditProfileContainer>
      <ProfileNav links={links} />
      <Switch>
        <Route
          exact
          path={`${match.path}/personal-information`}
          component={PersonalInformation}
        />
        <Route
          exact
          path={`${match.path}/change-password`}
          component={ChangePassword}
        />
        <Route
          exact
          path={`${match.path}/contact-information`}
          component={ContactInformation}
        />
      </Switch>
    </EditProfileContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(EditProfilePage);
