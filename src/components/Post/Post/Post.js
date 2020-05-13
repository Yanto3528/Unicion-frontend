import React, { useState, useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { deletePost } from "../../../redux/posts/postActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/users/userSelector";

// Components
import CommentList from "../../Comment/CommentList/CommentList";
import AddComment from "../../Comment/AddComment/AddComment";
import PostDropdown from "./PostDropdown/PostDropdown";
import PostSocialDetails from "./PostSocialDetails/PostSocialDetails";

// HOC
import withDropdown from "../../shared/HOC/withDropdown/withDropdown";

import Avatar from "../../shared/Avatar/Avatar";

// Styles
import {
  PostContainer,
  PostHeader,
  PostTitle,
  PostNameContainer,
  PostDate,
  PostBody,
  PostImage,
} from "./PostStyle";
import { ChevronDownIcon } from "../../../styles/shared/Icons";
import Name from "../../../styles/shared/Name";
import Body from "../../../styles/shared/Body";

const Post = ({
  post,
  currentUser,
  showDropdown,
  toggleDropdown,
  closeDropdown,
  deletePost,
}) => {
  const [showComments, setShowComments] = useState(false);
  const { profile } = post.postedBy;
  const timeString = moment(post.createdAt).fromNow();
  const isPostedByCurrentUser = post.postedBy._id === currentUser._id;

  const onDeletePost = useCallback(() => {
    deletePost(post._id);
  }, [post._id, deletePost]);

  const onShowComments = useCallback(() => {
    setShowComments(true);
  }, []);

  return (
    <PostContainer>
      <PostHeader>
        <Avatar src={profile.avatar} />
        <PostTitle>
          <PostNameContainer>
            <Name to={`/profile/${post.postedBy._id}/timeline`}>
              {profile.name}
            </Name>
            {isPostedByCurrentUser && (
              <ChevronDownIcon onClick={toggleDropdown} />
            )}
            <PostDropdown
              isEdit
              post={post}
              toggleDropdown={toggleDropdown}
              closeDropdown={closeDropdown}
              showDropdown={showDropdown}
              deletePost={onDeletePost}
            />
          </PostNameContainer>
          <PostDate>{timeString}</PostDate>
        </PostTitle>
      </PostHeader>
      <PostBody>
        <Body>{post.text}</Body>
        {post.image && <PostImage src={post.image} />}
        <PostSocialDetails
          likes={post.likes}
          comments={post.comments}
          id={post._id}
          showComments={onShowComments}
        />
      </PostBody>
      {showComments && (
        <Fragment>
          <CommentList comments={post.comments} />
          <AddComment post={post} />
        </Fragment>
      )}
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProp, { deletePost })(withDropdown(Post));
