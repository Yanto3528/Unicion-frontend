import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenu } from "../../../redux/menu/menuActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/users/userSelector";
import { selectIsMenuOpen } from "../../../redux/menu/menuSelector";

import { LeftSidebarContainer, SidebarNavList } from "./LeftSidebarStyle";
import {
  NewsIcon,
  PersonOutlineIcon,
  PeopleOutlineIcon,
  UserReceivedIcon,
} from "../../../styles/shared/Icons";

const LeftSidebar = ({ currentUser, isMenuOpen, toggleMenu }) => {
  return (
    <LeftSidebarContainer isOpen={isMenuOpen}>
      <Link to="/dashboard/newsfeed" onClick={toggleMenu}>
        <SidebarNavList>
          <NewsIcon />
          <span>Newsfeed</span>
        </SidebarNavList>
      </Link>
      <Link to={`/profile/${currentUser._id}/timeline`} onClick={toggleMenu}>
        <SidebarNavList>
          <PersonOutlineIcon />
          <span>Profile</span>
        </SidebarNavList>
      </Link>
      <Link to="/dashboard/friend-list" onClick={toggleMenu}>
        <SidebarNavList>
          <PeopleOutlineIcon />
          <span>Friend List</span>
        </SidebarNavList>
      </Link>
      <Link to="/dashboard/friend-requests" onClick={toggleMenu}>
        <SidebarNavList>
          <UserReceivedIcon />
          <span>Friend Requests</span>
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
  isMenuOpen: selectIsMenuOpen,
});

export default connect(mapStateToProps, { toggleMenu })(LeftSidebar);
