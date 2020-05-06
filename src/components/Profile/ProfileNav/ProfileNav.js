import React from "react";
import { withRouter } from "react-router-dom";

import {
  ProfileNavContainer,
  ProfileNavItem,
  ProfileNavItemLink,
} from "./ProfileNavStyle";

const ProfileNav = ({ match }) => {
  return (
    <ProfileNavContainer>
      <ProfileNavItem>
        <ProfileNavItemLink to={`/profile/${match.params.id}/timeline`}>
          Timeline
        </ProfileNavItemLink>
      </ProfileNavItem>
      <ProfileNavItem>
        <ProfileNavItemLink to={`/profile/${match.params.id}/about`}>
          About
        </ProfileNavItemLink>
      </ProfileNavItem>
      <ProfileNavItem>
        <ProfileNavItemLink to={`/profile/${match.params.id}/friends`}>
          Friends
        </ProfileNavItemLink>
      </ProfileNavItem>
    </ProfileNavContainer>
  );
};

export default withRouter(ProfileNav);
