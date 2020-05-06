import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../../redux/posts/postActions";

import LeftSidebar from "../../components/Layout/LeftSidebar/LeftSidebar";
import Newsfeed from "../../components/Layout/Newsfeed/Newsfeed";
import UserList from "../../components/User/UserList/UserList";
import FriendRequestList from "../../components/User/FriendRequestList/FriendRequestList";
import Spinner from "../../components/shared/Spinner/Spinner";

import Container from "../../styles/shared/Container";
import { DashboardContainer } from "./DashboardStyle";

const Dashboard = ({ currentUser, users, getPosts, match }) => {
  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);
  if (!currentUser) return <Spinner fullScreen />;
  return (
    <Container>
      <DashboardContainer>
        <LeftSidebar />
        <Switch>
          <Route exact path={`${match.path}/newsfeed`} component={Newsfeed} />
          <Route
            exact
            path={`${match.path}/friend-list`}
            render={(props) => (
              <UserList
                {...props}
                title={"Friend List"}
                error={"No friends found"}
              />
            )}
          />
          <Route
            exact
            path={`${match.path}/search/:query`}
            render={(props) => (
              <UserList
                {...props}
                title={"Search Result"}
                error={"No user found"}
              />
            )}
          />
          <Route
            exact
            path={`${match.path}/friend-requests`}
            component={FriendRequestList}
          />
          <Redirect from={match.path} to={`${match.path}/newsfeed`} />
        </Switch>
        <div>c</div>
      </DashboardContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  users: state.user.users,
});

export default connect(mapStateToProps, { getPosts })(Dashboard);
