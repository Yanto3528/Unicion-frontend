import React from "react";
import { connect } from "react-redux";
import { sendRequest, deleteFriend } from "../../../redux/users/userActions";

import Avatar from "../../shared/Avatar/Avatar";
import Button from "../../shared/Button/Button";

import {
  UserCardContainer,
  UserCardCoverPhoto,
  UserCardDetailsContainer,
  UserCardDetails,
} from "./UserCardStyle";
import Body from "../../../styles/shared/Body";
import Name from "../../../styles/shared/Name";
import { GreyButton } from "../../shared/Button/ButtonStyle";
import { CheckIcon } from "../../../styles/shared/Icons";

const UserCard = ({ user, currentUser, sendRequest, deleteFriend }) => {
  const onSendFriendRequest = () => {
    sendRequest(user._id);
  };

  const onDeleteFriend = () => deleteFriend(user._id);

  let button;
  if (user.friends.includes(currentUser._id))
    button = (
      <GreyButton onClick={onDeleteFriend}>
        <CheckIcon />
        Unfriend
      </GreyButton>
    );
  else if (user.friendRequests.includes(currentUser._id))
    button = <GreyButton>Request sent</GreyButton>;
  else button = <Button onClick={onSendFriendRequest}>Add friend</Button>;

  return (
    <UserCardContainer>
      <UserCardCoverPhoto src={user.profile.coverPhoto}>
        <Avatar whiteBG size="6rem" src={user.profile.avatar} />
      </UserCardCoverPhoto>
      <UserCardDetailsContainer>
        <UserCardDetails>
          <Name
            to={`/profile/${user._id}/timeline`}
          >{`${user.profile.firstName} ${user.profile.lastName}`}</Name>
          {user.profile.location && <Body>{user.profile.location.city}</Body>}
        </UserCardDetails>
        {button}
      </UserCardDetailsContainer>
    </UserCardContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { sendRequest, deleteFriend })(
  UserCard
);