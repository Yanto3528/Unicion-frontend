import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendRequest, deleteFriend } from "../../../redux/users/userActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/users/userSelector";

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
          <Name to={`/profile/${user._id}/timeline`}>{user.profile.name}</Name>
          {user.profile.location && <Body>{user.profile.location.city}</Body>}
        </UserCardDetails>
        {button}
      </UserCardDetailsContainer>
    </UserCardContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  sendRequest: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { sendRequest, deleteFriend })(
  UserCard
);
