import React from "react";

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

export default ProfileNav;
