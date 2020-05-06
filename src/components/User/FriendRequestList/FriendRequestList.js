import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriendRequests } from "../../../redux/users/userActions";

import FriendRequest from "../FriendRequest/FriendRequest";
import Title from "../../shared/Title/Title";
import Spinner from "../../shared/Spinner/Spinner";

import Card from "../../../styles/shared/Card";

const FriendRequestList = ({ users, currentUser, getFriendRequests }) => {
  useEffect(() => {
    getFriendRequests();
    //eslint-disable-next-line
  }, [currentUser]);

  if (!users) return <Spinner />;

  return (
    <Card>
      <Title>Friend Requests</Title>
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
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
  users: state.user.users,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { getFriendRequests })(
  FriendRequestList
);
