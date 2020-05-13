import React, { useCallback, Fragment } from "react";
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
import {
  HeartIcon,
  HeartOutlineIcon,
  CommentIcon,
} from "../../../../styles/shared/Icons";

const PostSocialDetails = ({ id, likes, comments, likePost, showComments }) => {
  const onLikePost = useCallback(() => {
    likePost(id);
  }, [id, likePost]);

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
        <PostSocialAction onClick={onLikePost}>
          <HeartOutlineIcon />
          Like
        </PostSocialAction>
        <PostSocialAction onClick={showComments}>
          <CommentIcon /> Comment
        </PostSocialAction>
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

export default connect(null, { likePost })(React.memo(PostSocialDetails));
