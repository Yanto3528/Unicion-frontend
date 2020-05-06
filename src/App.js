import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./redux/users/userActions";
import Navbar from "./components/Layout/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";

import setAuthToken from "./utils/setAuthToken";
import ProtectedRoute from "./routing/ProtectedRoute";

if (localStorage.token) setAuthToken(localStorage.token);

const App = ({ loadUser, loading }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/edit-profile" component={EditProfilePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { loadUser })(App);
