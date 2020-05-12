import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUsers, getUserFriends } from "../../../redux/users/userActions";

import { createStructuredSelector } from "reselect";
import {
  selectUsers,
  selectCurrentUser,
} from "../../../redux/users/userSelector";

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
    <Card main>
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

UserList.propTypes = {
  users: PropTypes.array,
  currentUser: PropTypes.object,
  error: PropTypes.string,
  title: PropTypes.string,
  match: PropTypes.object.isRequired,
  searchUsers: PropTypes.func.isRequired,
  getUserFriends: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  users: selectUsers,
});

export default connect(mapStateToProps, { searchUsers, getUserFriends })(
  UserList
);
