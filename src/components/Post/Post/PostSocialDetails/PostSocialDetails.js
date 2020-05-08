import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { likePost } from "../../../../redux/posts/postActions";

import {
  PostSocialIconContainer,
  PostSocialIcon,
  PostSocialIconText,
  PostSocialActionContainer,
  PostSocialAction,
} from "./PostSocialDetailsStyle";
import { HeartIcon } from "../../../../styles/shared/Icons";

const PostSocialDetails = ({ id, likes, comments, likePost, showComments }) => {
  const onLikePost = () => {
    likePost(id);
  };

  return (
    <Fragment>
      <PostSocialIconContainer>
        {likes.length > 0 && (
          <PostSocialIcon>
            <HeartIcon />
            &nbsp;
            <PostSocialIconText>{`${likes.length} likes`}</PostSocialIconText>
          </PostSocialIcon>
        )}
        {comments.length > 0 && (
          <PostSocialIcon>
            <PostSocialIconText>{`${comments.length} comments`}</PostSocialIconText>
          </PostSocialIcon>
        )}
      </PostSocialIconContainer>
      <PostSocialActionContainer>
        <PostSocialAction onClick={onLikePost}>Like</PostSocialAction>
        <PostSocialAction onClick={showComments}>Comment</PostSocialAction>
      </PostSocialActionContainer>
    </Fragment>
  );
};

PostSocialDetails.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  likePost: PropTypes.func.isRequired,
  showComments: PropTypes.func.isRequired,
};

export default connect(null, { likePost })(PostSocialDetails);
