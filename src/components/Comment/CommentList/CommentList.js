import React from "react";
import PropTypes from "prop-types";

import Comment from "../Comment";

import { CommentListContainer } from "./CommentListStyle";

const CommentList = ({ comments }) => {
  return (
    <CommentListContainer>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </CommentListContainer>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
