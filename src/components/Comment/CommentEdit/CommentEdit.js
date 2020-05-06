import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateComment } from "../../../redux/comments/commentActions";

import { CommentEditForm, CommentEditInput } from "./CommentEditStyle";
import Button from "../../shared/Button/Button";

import calculateTextareaRows from "../../../utils/CalculateTextareaRows";

const CommentEdit = ({ comment, posts, toggleEdit, updateComment }) => {
  const [formData, setFormData] = useState({
    text: comment.text,
  });
  const [commentUpdated, setCommentUpdated] = useState(false);
  const textareaRef = useRef(null);
  const [rows, setRows] = useState(1);
  const post = posts.find((post) => post._id === comment.post);

  useEffect(() => {
    if (post.loadingComments === false && commentUpdated) {
      toggleEdit();
    }
  }, [post.loadingComments, toggleEdit, commentUpdated]);

  useEffect(() => {
    setRows(calculateTextareaRows(textareaRef.current));
  }, [textareaRef]);

  const onChange = (event) => {
    const currentRows = calculateTextareaRows(event.target);
    setFormData({ text: event.target.value });
    setRows(currentRows);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (formData.text === "") {
      return console.log("Comment cannot be empty");
    }
    await updateComment(formData, comment._id, post._id);
    setCommentUpdated(true);
  };

  return (
    <CommentEditForm onSubmit={onSubmit}>
      <CommentEditInput
        value={formData.text}
        onChange={onChange}
        rows={rows}
        ref={textareaRef}
      />
      <Button loading={post.loadingComments}>Submit</Button>
      <Button secondary onClick={toggleEdit}>
        Cancel
      </Button>
    </CommentEditForm>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, { updateComment })(CommentEdit);
