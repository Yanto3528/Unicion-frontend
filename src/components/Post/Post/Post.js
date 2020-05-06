import React, { useState, Fragment } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { deletePost } from "../../../redux/posts/postActions";

// Components
import CommentList from "../../Comment/CommentList/CommentList";
import AddComment from "../../Comment/AddComment/AddComment";
import PostDropdown from "./PostDropdown/PostDropdown";
import PostSocialDetails from "./PostSocialDetails/PostSocialDetails";

// HOC
import withDropdown from "../../shared/HOC/withDropdown/withDropdown";

// Styles
import Card from "../../../styles/shared/Card";
import Avatar from "../../../styles/shared/Avatar";
import Body from "../../../styles/shared/Body";
import {
  PostHeader,
  PostTitle,
  PostNameContainer,
  PostDate,
  PostBody,
  PostImage,
} from "./PostStyle";
import { ChevronDownIcon } from "../../../styles/shared/Icons";
import Name from "../../../styles/shared/Name";

const Post = ({
  post,
  currentUser,
  toggleDropdown,
  showDropdown,
  deletePost,
}) => {
  const [showComments, setShowComments] = useState(false);
  const { profile } = post.postedBy;
  const timeDifference = moment(post.createdAt).fromNow();
  const isPostedByCurrentUser = post.postedBy._id === currentUser._id;

  const onDeletePost = () => {
    deletePost(post._id);
  };

  const onShowComments = () => {
    setShowComments(true);
  };

  return (
    <Card mb="2rem">
      <PostHeader>
        <Avatar src={profile.avatar} />
        <PostTitle>
          <PostNameContainer>
            <Name
              to={`/profile/${post.postedBy._id}/timeline`}
            >{`${profile.firstName} ${profile.lastName}`}</Name>
            {isPostedByCurrentUser && (
              <ChevronDownIcon onClick={toggleDropdown} />
            )}
            <PostDropdown
              isEdit
              post={post}
              toggleDropdown={toggleDropdown}
              showDropdown={showDropdown}
              deletePost={onDeletePost}
            />
          </PostNameContainer>
          <PostDate>{timeDifference}</PostDate>
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
    </Card>
  );
};

const mapStateToProp = (state) => ({
  currentUser: state.user.currentUser,
});

export default withDropdown(connect(mapStateToProp, { deletePost })(Post));
