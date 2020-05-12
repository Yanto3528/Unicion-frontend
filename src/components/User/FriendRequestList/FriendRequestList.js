import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFriendRequests } from "../../../redux/users/userActions";

import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectFriendRequests,
} from "../../../redux/users/userSelector";

import FriendRequest from "../FriendRequest/FriendRequest";
import Title from "../../shared/Title/Title";
import Spinner from "../../shared/Spinner/Spinner";

import Card from "../../../styles/shared/Card";

const FriendRequestList = ({
  friendRequests,
  currentUser,
  getFriendRequests,
}) => {
  useEffect(() => {
    getFriendRequests();
    //eslint-disable-next-line
  }, [currentUser]);

  if (!friendRequests) return <Spinner />;

  return (
    <Card main>
      <Title>Friend Requests</Title>
      {friendRequests.length > 0 ? (
        <div>
          {friendRequests.map((user) => (
            <FriendRequest key={user._id} user={user} />
          ))}
        </div>
      ) : (
        "No friend requests"
      )}
    </Card>
  );
};

FriendRequestList.propTypes = {
  friendRequests: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  getFriendRequests: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  friendRequests: selectFriendRequests,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { getFriendRequests })(
  FriendRequestList
);
