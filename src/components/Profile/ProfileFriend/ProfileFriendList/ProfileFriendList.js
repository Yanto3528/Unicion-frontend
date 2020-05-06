import React from "react";

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

export default ProfileFriendList;
