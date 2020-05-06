import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchUsers, getUserFriends } from "../../../redux/users/userActions";

import UserCard from "../UserCard/UserCard";
import Spinner from "../../shared/Spinner/Spinner";
import Title from "../../shared/Title/Title";

import { UserListContainer } from "./UserListStyle";
import Card from "../../../styles/shared/Card";
import Body from "../../../styles/shared/Body";

const UserList = ({
  users,
  currentUser,
  error,
  title,
  match,
  searchUsers,
  getUserFriends,
}) => {
  useEffect(() => {
    if (match.params.query) {
      searchUsers(match.params.query);
    } else if (match.path === "/dashboard/friend-list") {
      getUserFriends(currentUser._id);
    }
  }, [
    match.params.query,
    match.path,
    currentUser,
    searchUsers,
    getUserFriends,
  ]);

  if (!users) return <Spinner />;
  return (
    <Card>
      <Title>{title}</Title>
      {users.length > 0 ? (
        <UserListContainer>
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </UserListContainer>
      ) : (
        <Body>{error}</Body>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  users: state.user.users,
});

export default connect(mapStateToProps, { searchUsers, getUserFriends })(
  UserList
);
