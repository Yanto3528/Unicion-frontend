import React from "react";
import PropTypes from "prop-types";

import { ProfileNavContainer, ProfileNavItemLink } from "./ProfileNavStyle";

const ProfileNav = ({ links }) => {
  return (
    <ProfileNavContainer>
      {links.map((link) => (
        <ProfileNavItemLink key={link.id} to={link.url}>
          {link.title}
        </ProfileNavItemLink>
      ))}
    </ProfileNavContainer>
  );
};

ProfileNav.propTypes = {
  links: PropTypes.array.isRequired,
};

export default ProfileNav;
