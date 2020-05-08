import React, { useState, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/users/userSelector";

import ProfileNav from "../../components/Profile/ProfileNav/ProfileNav";
import Spinner from "../../components/shared/Spinner/Spinner";

import { EditProfileContainer } from "./EditProfilePageStyle";

const PersonalInformation = lazy(() =>
  import("./PersonalInformation/PersonalInformation")
);
const ChangePassword = lazy(() => import("./ChangePassword/ChangePassword"));
const ContactInformation = lazy(() =>
  import("./ContactInformation/ContactInformation")
);

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
        <Suspense fallback={<Spinner center />}>
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
        </Suspense>
      </Switch>
    </EditProfileContainer>
  );
};

EditProfilePage.propTypes = {
  currentUser: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(EditProfilePage);
