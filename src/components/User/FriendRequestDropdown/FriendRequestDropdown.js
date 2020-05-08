import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => ({
  friendRequests: state.user.friendRequests,
});

export default connect(mapStateToProps)(FriendRequestDropdown);
