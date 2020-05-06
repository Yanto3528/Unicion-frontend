import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../../redux/comments/commentActions";

import Button from "../../shared/Button/Button";

import { CommentInputForm, CommentInput } from "./AddCommentStyle";
import Avatar from "../../../styles/shared/Avatar";

import calculateTextareaRows from "../../../utils/CalculateTextareaRows";

const AddComment = ({ currentUser, post, addComment }) => {
  const [formData, setFormData] = useState({
    text: "",
  });
  const [rows, setRows] = useState(1);

  const onChange = (event) => {
    const currentRows = calculateTextareaRows(event.target);
    setFormData({ text: event.target.value });
    setRows(currentRows);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addComment(formData, post._id);
    setFormData({ text: "" });
  };

  return (
    <CommentInputForm onSubmit={onSubmit}>
      <Avatar src={currentUser.profile.avatar} />
      <CommentInput
        type="text"
        placeholder="Write a comment"
        rows={rows}
        onChange={onChange}
        value={formData.text}
      />
      <Button loading={post.loadingComments}>Post</Button>
    </CommentInputForm>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { addComment })(AddComment);
