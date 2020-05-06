import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../../redux/posts/postActions";

import ProfileOverview from "../../../components/Profile/ProfileOverview/ProfileOverview";
import PostList from "../../../components/Post/PostList/PostList";

import { TimelineContainer } from "./TimelineStyle";

const Timeline = ({ posts, user, getPosts }) => {
  useEffect(() => {
    getPosts(user._id);
    //eslint-disable-next-line
  }, [user]);
  return (
    <TimelineContainer>
      <ProfileOverview />
      <PostList posts={posts} />
    </TimelineContainer>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  user: state.user.user,
});

export default connect(mapStateToProps, { getPosts })(Timeline);
