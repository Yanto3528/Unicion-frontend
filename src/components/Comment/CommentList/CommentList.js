import React from "react";

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
export default CommentList;
