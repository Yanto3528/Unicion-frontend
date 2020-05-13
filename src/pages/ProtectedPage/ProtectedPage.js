import React, { useEffect, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  addNotification,
  getNotifications,
} from "../../redux/notifications/notificationActions";
import {
  getFriendRequests,
  addFriendRequest,
} from "../../redux/users/userActions";
import io from "socket.io-client";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/users/userSelector";

import Spinner from "../../components/shared/Spinner/Spinner";

import ProtectedRoute from "../../routing/ProtectedRoute";

const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const ProfilePage = lazy(() => import("../ProfilePage/ProfilePage"));
const EditProfilePage = lazy(() =>
  import("../EditProfilePage/EditProfilePage")
);

let socket;

const ProtectedPage = ({
  currentUser,
  addNotification,
  addFriendRequest,
  getNotifications,
  getFriendRequests,
}) => {
  useEffect(() => {
    getNotifications();
    getFriendRequests();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    socket = io("http://localhost:5000");
    if (currentUser) {
      socket.emit("online", currentUser._id);
    }
    socket.on("get-notification", (notification) => {
      addNotification(notification);
    });
    socket.on("get-friend-request", (user) => {
      console.log(user);
      addFriendRequest(user);
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <Switch>
      <Suspense fallback={<Spinner fullscreen />}>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/profile/:id" component={ProfilePage} />
        <ProtectedRoute path="/edit-profile" component={EditProfilePage} />
        <Redirect from="/" to="/dashboard/newsfeed" />
      </Suspense>
    </Switch>
  );
};

ProtectedPage.propTypes = {
  currentUser: PropTypes.object,
  addNotification: PropTypes.func.isRequired,
  addFriendRequest: PropTypes.func.isRequired,
  getFriendRequests: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, {
  addNotification,
  addFriendRequest,
  getNotifications,
  getFriendRequests,
})(ProtectedPage);
