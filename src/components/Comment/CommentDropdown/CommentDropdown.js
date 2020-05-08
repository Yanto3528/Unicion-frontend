import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../../redux/comments/commentActions";

import { createStructuredSelector } from "reselect";
import { selectPosts } from "../../../redux/posts/postSelector";

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

CommentDropdown.propTypes = {
  comment: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});

export default connect(mapStateToProps, { deleteComment })(CommentDropdown);
