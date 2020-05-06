import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { likeUnlikeComment } from "../../redux/comments/commentActions";
import moment from "moment";

import withDropdown from "../shared/HOC/withDropdown/withDropdown";
import CommentDropdown from "./CommentDropdown/CommentDropdown";
import CommentEdit from "./CommentEdit/CommentEdit";

import {
  CommentContainer,
  CommentHeaderContainer,
  CommentDetails,
  CommentAction,
  CommentDate,
  CommentFooterContainer,
  CommentFooter,
} from "./CommentStyle";
import Avatar from "../../styles/shared/Avatar";
import Body from "../../styles/shared/Body";
import Name from "../../styles/shared/Name";
import { ChevronDownIcon } from "../../styles/shared/Icons";

const Comment = ({
  comment,
  posts,
  currentUser,
  showDropdown,
  toggleDropdown,
  likeUnlikeComment,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const { profile } = comment.postedBy;
  const timeString = moment(comment.createdAt).fromNow();
  const unlike = comment.likes.includes(currentUser._id);

  const onToggleEdit = () => {
    setIsEdit((prevState) => !prevState);
  };

  const onLikeUnlikeComment = () => {
    const post = posts.find((post) => post._id === comment.post);
    likeUnlikeComment(comment._id, post._id);
  };

  return (
    <CommentContainer>
      <Avatar src={profile.avatar} />
      <CommentDetails>
        <CommentHeaderContainer>
          <Name
            to={`/profile/${comment.postedBy._id}/timeline`}
          >{`${profile.firstName} ${profile.lastName}`}</Name>
          {comment.postedBy._id === currentUser._id && (
            <ChevronDownIcon onClick={toggleDropdown} />
          )}
          {showDropdown && (
            <CommentDropdown
              toggleEdit={onToggleEdit}
              toggleDropdown={toggleDropdown}
              comment={comment}
            />
          )}
        </CommentHeaderContainer>
        {isEdit ? (
          <CommentEdit toggleEdit={onToggleEdit} comment={comment} />
        ) : (
          <Fragment>
            <Body>{comment.text}</Body>
            <CommentFooterContainer>
              <CommentFooter>
                <CommentAction onClick={onLikeUnlikeComment} unlike={unlike}>
                  {unlike ? "Unlike" : "Like"}
                </CommentAction>
                <CommentDate>{timeString}</CommentDate>
              </CommentFooter>
              {comment.likes.length > 0 && <p>{comment.likes.length} likes</p>}
            </CommentFooterContainer>
          </Fragment>
        )}
      </CommentDetails>
    </CommentContainer>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { likeUnlikeComment })(
  withDropdown(Comment)
);
