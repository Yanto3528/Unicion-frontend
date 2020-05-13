import React, { useState, useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { likeUnlikeComment } from "../../redux/comments/commentActions";

import { createStructuredSelector } from "reselect";
import { selectPosts } from "../../redux/posts/postSelector";
import { selectCurrentUser } from "../../redux/users/userSelector";

import moment from "moment";

import withDropdown from "../shared/HOC/withDropdown/withDropdown";
import CommentDropdown from "./CommentDropdown/CommentDropdown";
import CommentEdit from "./CommentEdit/CommentEdit";
import Avatar from "../shared/Avatar/Avatar";

import {
  CommentContainer,
  CommentHeaderContainer,
  CommentDetails,
  CommentAction,
  CommentDate,
  CommentFooterContainer,
  CommentFooter,
} from "./CommentStyle";
import Body from "../../styles/shared/Body";
import Name from "../../styles/shared/Name";
import { ChevronDownIcon } from "../../styles/shared/Icons";

const Comment = ({
  comment,
  posts,
  currentUser,
  showDropdown,
  toggleDropdown,
  closeDropdown,
  likeUnlikeComment,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const { profile } = comment.postedBy;
  const timeString = moment(comment.createdAt).fromNow();
  const unlike = comment.likes.includes(currentUser._id);

  const onToggleEdit = useCallback(() => {
    setIsEdit((prevState) => !prevState);
  }, []);

  const onLikeUnlikeComment = useCallback(() => {
    const post = posts.find((post) => post._id === comment.post);
    likeUnlikeComment(comment._id, post._id);
  }, [comment._id, comment.post, likeUnlikeComment, posts]);

  return (
    <CommentContainer>
      <Avatar src={profile.avatar} />
      <CommentDetails>
        <CommentHeaderContainer>
          <Name to={`/profile/${comment.postedBy._id}/timeline`}>
            {profile.name}
          </Name>
          {comment.postedBy._id === currentUser._id && (
            <ChevronDownIcon onClick={toggleDropdown} />
          )}
          {showDropdown && (
            <CommentDropdown
              toggleEdit={onToggleEdit}
              toggleDropdown={toggleDropdown}
              closeDropdown={closeDropdown}
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

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  likeUnlikeComment: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { likeUnlikeComment })(
  withDropdown(Comment)
);
