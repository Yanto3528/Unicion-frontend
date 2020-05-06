import React from "react";
import { connect } from "react-redux";

import withSpinner from "../../shared/HOC/withSpinner/withSpinner";

import Post from "../Post/Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default withSpinner(connect(mapStateToProps)(PostList));
