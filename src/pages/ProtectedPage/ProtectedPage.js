import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  addNotification,
  getNotifications,
} from "../../redux/notifications/notificationActions";
import io from "socket.io-client";

import ProtectedRoute from "../../routing/ProtectedRoute";
import Dashboard from "../Dashboard/Dashboard";
import ProfilePage from "../ProfilePage/ProfilePage";
import EditProfilePage from "../EditProfilePage/EditProfilePage";

let socket;

const ProtectedPage = ({ currentUser, addNotification, getNotifications }) => {
  useEffect(() => {
    getNotifications();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    socket = io("http://localhost:5000");
    if (currentUser) {
      socket.emit("online", currentUser._id, () => {});
      socket.on("get-notification", (notification) => {
        addNotification(notification);
      });
    }
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <Switch>
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/profile/:id" component={ProfilePage} />
      <ProtectedRoute path="/edit-profile" component={EditProfilePage} />
      <Redirect from="/" to="/dashboard/newsfeed" />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { addNotification, getNotifications })(
  ProtectedPage
);
