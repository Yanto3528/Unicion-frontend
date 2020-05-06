import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Spinner from "../../components/shared/Spinner/Spinner";

const EditProfilePage = ({ currentUser, match }) => {
  if (!currentUser) return <Spinner center />;
  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${match.path}/personal-information`}
          component={PersonalInformation}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(EditProfilePage);
