import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(LeftSidebar);
