import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../../redux/posts/postActions";

import LeftSidebar from "../../components/Layout/LeftSidebar/LeftSidebar";
import Spinner from "../../components/shared/Spinner/Spinner";

import Container from "../../styles/shared/Container";
import { DashboardContainer } from "./DashboardStyle";

const Newsfeed = lazy(() =>
  import("../../components/Layout/Newsfeed/Newsfeed")
);
const UserList = lazy(() => import("../../components/User/UserList/UserList"));
const FriendRequestList = lazy(() =>
  import("../../components/User/FriendRequestList/FriendRequestList")
);

const Dashboard = ({ currentUser, users, getPosts, match }) => {
  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);
  if (!currentUser) return <Spinner center />;
  return (
    <Container>
      <DashboardContainer>
        <LeftSidebar />
        <Switch>
          <Suspense fallback={<Spinner center />}>
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
          </Suspense>
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
