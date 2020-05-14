import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../../redux/posts/postActions";

import { createStructuredSelector } from "reselect";
import { selectUser } from "../../../redux/users/userSelector";
import { selectPosts } from "../../../redux/posts/postSelector";

import ProfileOverview from "../../../components/Profile/ProfileOverview/ProfileOverview";
import PostList from "../../../components/Post/PostList/PostList";

import { TimelineContainer } from "./TimelineStyle";

const Timeline = ({ posts, user, getPosts }) => {
  useEffect(() => {
    getPosts(user._id);
    //eslint-disable-next-line
  }, [user._id]);
  return (
    <TimelineContainer>
      <ProfileOverview />
      <PostList posts={posts} />
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  posts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  user: selectUser,
});

export default connect(mapStateToProps, { getPosts })(Timeline);
