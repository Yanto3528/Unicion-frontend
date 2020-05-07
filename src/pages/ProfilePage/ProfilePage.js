import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getUserById } from "../../redux/users/userActions";

import Spinner from "../../components/shared/Spinner/Spinner";

import ProtectedRoute from "../../routing/ProtectedRoute";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import ProfileNav from "../../components/Profile/ProfileNav/ProfileNav";
import Timeline from "./Timeline/Timeline";
import About from "./About/About";
import ProfileFriends from "./ProfileFriends/ProfileFriends";

import { ProfilePageContainer } from "./ProfilePageStyle";
import Card from "../../styles/shared/Card";

const ProfilePage = ({ match, user, currentUser, getUserById }) => {
  const [links] = useState([
    {
      id: 1,
      url: `/profile/${match.params.id}/timeline`,
      title: "Timeline",
    },
    {
      id: 2,
      url: `/profile/${match.params.id}/about`,
      title: "About",
    },
    {
      id: 3,
      url: `/profile/${match.params.id}/friends`,
      title: "Friends",
    },
  ]);
  useEffect(() => {
    getUserById(match.params.id);
    //eslint-disable-next-line
  }, [match.params.id]);
  if (!user || !currentUser) return <Spinner fullScreen />;
  return (
    <ProfilePageContainer>
      <Card pd="0">
        <ProfileHeader />
      </Card>
      <ProfileNav links={links} />
      <Switch>
        <ProtectedRoute
          exact
          path={`${match.url}/timeline`}
          component={Timeline}
        />
        <ProtectedRoute exact path={`${match.url}/about`} component={About} />
        <ProtectedRoute
          exact
          path={`${match.url}/friends`}
          component={ProfileFriends}
        />
      </Switch>
    </ProfilePageContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { getUserById })(ProfilePage);
