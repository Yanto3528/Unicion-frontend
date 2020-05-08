import React from "react";
import PropTypes from "prop-types";

import ProfileFriend from "../ProfileFriend";

import { ProfileFriendListContainer } from "./ProfileFriendListStyle";

const ProfileFriendList = ({ users }) => {
  return (
    <ProfileFriendListContainer>
      {users.map((user) => (
        <ProfileFriend key={user._id} user={user} />
      ))}
    </ProfileFriendListContainer>
  );
};

ProfileFriendList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default ProfileFriendList;
