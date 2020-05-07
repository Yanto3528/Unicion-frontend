import React from "react";
import { connect } from "react-redux";

import PostInput from "../../Post/PostInput/PostInput";
import PostList from "../../Post/PostList/PostList";

const Newsfeed = ({ loadingPosts }) => {
  return (
    <div>
      <PostInput />
      <PostList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loadingPosts: state.post.loadingPosts,
});

export default connect(mapStateToProps)(Newsfeed);
