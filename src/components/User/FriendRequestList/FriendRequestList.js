import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriendRequests } from "../../../redux/users/userActions";

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
    <Card>
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

const mapStateToProps = (state) => ({
  friendRequests: state.user.friendRequests,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { getFriendRequests })(
  FriendRequestList
);
