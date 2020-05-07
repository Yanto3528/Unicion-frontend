import React, { useEffect, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./redux/users/userActions";
import Navbar from "./components/Layout/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";

import setAuthToken from "./utils/setAuthToken";
import ProtectedRoute from "./routing/ProtectedRoute";

if (localStorage.token) setAuthToken(localStorage.token);

const App = ({ loadUser, currentUser }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Switch>
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/profile/:id" component={ProfilePage} />
        <ProtectedRoute path="/edit-profile" component={EditProfilePage} /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route
          path="/"
          render={(props) => <ProtectedPage {...props} data={currentUser} />}
        />
        {/* <Redirect from="/" to="/dashboard/newsfeed" /> */}
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { loadUser })(App);
