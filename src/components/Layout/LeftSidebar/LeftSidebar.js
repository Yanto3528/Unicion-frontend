import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/users/userSelector";

import { LeftSidebarContainer, SidebarNavList } from "./LeftSidebarStyle";
import {
  NewsIcon,
  PersonOutlineIcon,
  PeopleOutlineIcon,
  UserReceivedIcon,
  ChatIcon,
} from "../../../styles/shared/Icons";

const LeftSidebar = ({ currentUser }) => {
  return (
    <LeftSidebarContainer>
      <Link to="/dashboard/newsfeed">
        <SidebarNavList>
          <NewsIcon />
          Newsfeed
        </SidebarNavList>
      </Link>
      <Link to={`/profile/${currentUser._id}/timeline`}>
        <SidebarNavList>
          <PersonOutlineIcon />
          Profile
        </SidebarNavList>
      </Link>
      <Link to="/dashboard/friend-list">
        <SidebarNavList>
          <PeopleOutlineIcon />
          Friend List
        </SidebarNavList>
      </Link>
      <Link to="/dashboard/friend-requests">
        <SidebarNavList>
          <UserReceivedIcon />
          Friend Requests
        </SidebarNavList>
      </Link>
      <Link to="/">
        <SidebarNavList>
          <ChatIcon />
          Chat Messages
        </SidebarNavList>
      </Link>
    </LeftSidebarContainer>
  );
};

LeftSidebar.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(LeftSidebar);
