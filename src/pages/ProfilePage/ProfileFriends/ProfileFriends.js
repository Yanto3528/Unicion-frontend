import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserFriends } from "../../../redux/users/userActions";

import { createStructuredSelector } from "reselect";
import { selectUsers, selectUser } from "../../../redux/users/userSelector";

import ProfileFriendList from "../../../components/Profile/ProfileFriend/ProfileFriendList/ProfileFriendList";
import Spinner from "../../../components/shared/Spinner/Spinner";

import Card from "../../../styles/shared/Card";
import Subtitle from "../../../styles/shared/Subtitle";

const ProfileFriends = ({ user, users, getUserFriends }) => {
  useEffect(() => {
    getUserFriends(user._id);
    //eslint-disable-next-line
  }, []);
  if (!users) return <Spinner />;
  return (
    <Card>
      <Subtitle>Friends</Subtitle>
      <ProfileFriendList users={users} />
    </Card>
  );
};

ProfileFriends.propTypes = {
  user: PropTypes.object,
  users: PropTypes.array,
  getUserFriends: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  users: selectUsers,
});

export default connect(mapStateToProps, { getUserFriends })(ProfileFriends);
