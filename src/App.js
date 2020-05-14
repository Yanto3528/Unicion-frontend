import React, { useEffect, lazy, Suspense, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./redux/users/userActions";

import Navbar from "./components/Layout/Navbar/Navbar";
import Spinner from "./components/shared/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import setAuthToken from "./utils/setAuthToken";

const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const ProtectedPage = lazy(() => import("./pages/ProtectedPage/ProtectedPage"));

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner fullScreen />}>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route
              path="/"
              render={(props) => (
                <ProtectedPage {...props} data={currentUser} />
              )}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { loadUser })(App);
