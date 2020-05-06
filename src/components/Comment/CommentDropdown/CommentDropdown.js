import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../../redux/comments/commentActions";

import Dropdown, { DropdownOption } from "../../../styles/shared/Dropdown";
import { EditIcon, TrashIcon } from "../../../styles/shared/Icons";

const CommentDropdown = ({
  comment,
  posts,
  toggleEdit,
  toggleDropdown,
  deleteComment,
}) => {
  const onToggleEdit = () => {
    toggleEdit();
    toggleDropdown();
  };

  const onDeleteComment = () => {
    const post = posts.find((post) => post._id === comment.post);
    deleteComment(comment._id, post._id);
  };

  return (
    <Dropdown>
      <DropdownOption onClick={onToggleEdit}>
        <EditIcon />
        <p>Edit</p>
      </DropdownOption>
      <DropdownOption onClick={onDeleteComment}>
        <TrashIcon />
        <p>Delete</p>
      </DropdownOption>
    </Dropdown>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, { deleteComment })(CommentDropdown);
