import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/users/userSelector";

import withModal from "../../shared/HOC/withModal/withModal";
import PostInputModal from "./PostInputModal/PostInputModal";
import Avatar from "../../shared/Avatar/Avatar";

import { PostInputForm, PostInputGroup, PostInputText } from "./PostInputStyle";
import Card from "../../../styles/shared/Card";

const PostInput = ({ currentUser, toggleModal }) => {
  return (
    <Card pd="0" mb="2rem">
      <PostInputForm>
        <PostInputGroup>
          <Avatar size="4rem" src={currentUser.profile.avatar} />
          <PostInputText
            placeholder="Write something here..."
            onFocus={toggleModal}
            height="4rem"
          />
        </PostInputGroup>
      </PostInputForm>
    </Card>
  );
};

PostInput.propTypes = {
  currentUser: PropTypes.object.isRequired,
  toggleModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(withModal(PostInput, PostInputModal));
