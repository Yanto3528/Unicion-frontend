import React, { useEffect, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../../redux/posts/postActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/users/userSelector";

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

const Dashboard = ({ currentUser, match, getPosts }) => {
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
          <Suspense fallback={<Spinner fullScreen />}>
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
      </DashboardContainer>
    </Container>
  );
};

Dashboard.propTypes = {
  currentUser: PropTypes.object,
  match: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { getPosts })(Dashboard);
