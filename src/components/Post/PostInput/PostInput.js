import React from "react";
import { connect } from "react-redux";

import withModal from "../../shared/HOC/withModal/withModal";
import PostInputModal from "./PostInputModal/PostInputModal";

import { PostInputForm, PostInputGroup, PostTextarea } from "./PostInputStyle";
import Card from "../../../styles/shared/Card";
import Avatar from "../../../styles/shared/Avatar";

const PostInput = ({ toggleModal, currentUser }) => {
  return (
    <Card pd="0" mb="2rem">
      {/* <Title size="sm">Create Post</Title> */}
      <PostInputForm>
        <PostInputGroup>
          <Avatar size="4rem" src={currentUser.profile.avatar} />
          <PostTextarea
            placeholder="Write something here..."
            onFocus={toggleModal}
            height="4rem"
          />
        </PostInputGroup>
      </PostInputForm>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(withModal(PostInput, PostInputModal));