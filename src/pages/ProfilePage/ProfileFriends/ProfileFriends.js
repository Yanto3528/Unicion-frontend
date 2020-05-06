import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserFriends } from "../../../redux/users/userActions";

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

const mapStateToProps = (state) => ({
  user: state.user.user,
  users: state.user.users,
});

export default connect(mapStateToProps, { getUserFriends })(ProfileFriends);
