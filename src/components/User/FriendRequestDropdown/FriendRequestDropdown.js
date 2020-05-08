import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectFriendRequests } from "../../../redux/users/userSelector";

import FriendRequest from "../FriendRequest/FriendRequest";

import { FriendRequestsContainer } from "./FriendRequestDropdownStyle";
import Dropdown, {
  DropdownHeader,
  DropdownTitle,
} from "../../../styles/shared/Dropdown";

const FriendRequestDropdown = ({ friendRequests }) => {
  return (
    <Dropdown width="50rem">
      <DropdownHeader>
        <DropdownTitle>Friend Requests</DropdownTitle>
      </DropdownHeader>
      <FriendRequestsContainer>
        {friendRequests.length > 0
          ? friendRequests.map((user) => (
              <FriendRequest key={user._id} user={user} />
            ))
          : "No friend request"}
      </FriendRequestsContainer>
    </Dropdown>
  );
};

FriendRequestDropdown.propTypes = {
  friendRequests: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  friendRequests: selectFriendRequests,
});

export default connect(mapStateToProps)(FriendRequestDropdown);
