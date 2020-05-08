import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendRequest, deleteFriend } from "../../../redux/users/userActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/users/userSelector";

import Button from "../../shared/Button/Button";

import {
  ProfileFriendCard,
  ProfileFriendDetail,
  ProfileFriendAvatar,
} from "./ProfileFriendStyle";
import Body from "../../../styles/shared/Body";
import Name from "../../../styles/shared/Name";
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
  else if (user._id === currentUser._id) button = null;
  else button = <Button onClick={onSendFriendRequest}>Add friend</Button>;
  return (
    <ProfileFriendCard>
      <ProfileFriendDetail>
        <ProfileFriendAvatar src={user.profile.avatar} />
        <div>
          <Name to={`/profile/${user._id}/timeline`}>{user.profile.name}</Name>
          <Body>{user.friends.length} friends</Body>
        </div>
      </ProfileFriendDetail>
      {button}
    </ProfileFriendCard>
  );
};

ProfileFriend.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  sendRequest: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { sendRequest, deleteFriend })(
  ProfileFriend
);
