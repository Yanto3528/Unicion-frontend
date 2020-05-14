import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectPosts,
  selectLoadingPosts,
} from "../../../redux/posts/postSelector";

import Post from "../Post/Post";
import Spinner from "../../shared/Spinner/Spinner";

import { PostListContainer } from "./PostListStyle";

const PostList = ({ posts, loadingPosts }) => {
  return (
    <PostListContainer>
      {loadingPosts && <Spinner transparent />}
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h2>No post yet. Please add some friend to see their posts.</h2>
      )}
    </PostListContainer>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  loadingPosts: selectLoadingPosts,
});

export default connect(mapStateToProps)(PostList);
