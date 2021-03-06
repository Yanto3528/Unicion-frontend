import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteRequest, acceptRequest } from "../../../redux/users/userActions";

import Avatar from "../../shared/Avatar/Avatar";
import Button from "../../shared/Button/Button";

import {
  FriendRequestContainer,
  FriendRequestChildContainer,
  FriendRequestDetails,
} from "./FriendRequestStyle";
import Name from "../../../styles/shared/Name";
import Body from "../../../styles/shared/Body";

const FriendRequest = ({ user, deleteRequest, acceptRequest }) => {
  const onDeleteFriendRequest = useCallback(() => {
    deleteRequest(user._id);
  }, [deleteRequest, user._id]);

  const onAcceptRequest = useCallback(() => {
    acceptRequest(user._id);
  }, [acceptRequest, user._id]);

  return (
    <FriendRequestContainer>
      <FriendRequestChildContainer>
        <Avatar src={user.profile.avatar} />
        <FriendRequestDetails>
          <Name to={`/profile/${user._id}/timeline`}>{user.profile.name}</Name>
          <Body>{`${user.friends.length} Friends`}</Body>
        </FriendRequestDetails>
      </FriendRequestChildContainer>
      <FriendRequestChildContainer>
        <Button onClick={onAcceptRequest}>Accept</Button>
        <Button secondary onClick={onDeleteFriendRequest}>
          Delete
        </Button>
      </FriendRequestChildContainer>
    </FriendRequestContainer>
  );
};

FriendRequest.propTypes = {
  user: PropTypes.object.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  acceptRequest: PropTypes.func.isRequired,
};

export default connect(null, { deleteRequest, acceptRequest })(FriendRequest);
