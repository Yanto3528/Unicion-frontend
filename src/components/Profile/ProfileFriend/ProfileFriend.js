import React from "react";
import { connect } from "react-redux";
import { sendRequest, deleteFriend } from "../../../redux/users/userActions";

import Button from "../../shared/Button/Button";

import {
  ProfileFriendCard,
  ProfileFriendDetail,
  ProfileFriendAvatar,
  ProfileFriendName,
} from "./ProfileFriendStyle";
import Body from "../../../styles/shared/Body";
import { GreyButton } from "../../shared/Button/ButtonStyle";
import { CheckIcon } from "../../../styles/shared/Icons";

const ProfileFriend = ({ user, currentUser, sendRequest, deleteFriend }) => {
  const onDeleteFriend = () => {
    deleteFriend(user._id);
  };

  const onSendFriendRequest = () => {
    sendRequest(user._id);
  };

  let button;
  if (currentUser.friends.includes(user._id))
    button = (
      <GreyButton onClick={onDeleteFriend}>
        <CheckIcon />
        Friend
      </GreyButton>
    );
  else if (user.friendRequests.includes(currentUser._id))
    button = <GreyButton>Request sent</GreyButton>;
  else button = <Button onClick={onSendFriendRequest}>Add friend</Button>;
  return (
    <ProfileFriendCard>
      <ProfileFriendDetail>
        <ProfileFriendAvatar src={user.profile.avatar} />
        <div>
          <ProfileFriendName>{`${user.profile.firstName} ${user.profile.lastName}`}</ProfileFriendName>
          <Body>{user.friends.length} friends</Body>
        </div>
      </ProfileFriendDetail>
      {button}
    </ProfileFriendCard>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { sendRequest, deleteFriend })(
  ProfileFriend
);
