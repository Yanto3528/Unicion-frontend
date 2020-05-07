import React from "react";
import { connect } from "react-redux";

import Spinner from "../../shared/Spinner/Spinner";

import Post from "../Post/Post";

const PostList = ({ posts, loadingPosts }) => {
  if (loadingPosts) return <Spinner />;
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h2>No post yet. Please add some friend to see their posts.</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loadingPosts: state.post.loadingPosts,
});

export default connect(mapStateToProps)(PostList);
