import React from "react";
import PropTypes from "prop-types";

import ProfileFriend from "../ProfileFriend";

import { ProfileFriendListContainer } from "./ProfileFriendListStyle";

const ProfileFriendList = ({ users }) => {
  return (
    <ProfileFriendListContainer>
      {users.length > 0
        ? users.map((user) => <ProfileFriend key={user._id} user={user} />)
        : "No friends yet"}
    </ProfileFriendListContainer>
  );
};

ProfileFriendList.propTypes = {
  users: PropTypes.array,
};

export default ProfileFriendList;
