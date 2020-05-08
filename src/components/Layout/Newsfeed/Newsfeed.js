import React from "react";

import PostInput from "../../Post/PostInput/PostInput";
import PostList from "../../Post/PostList/PostList";

const Newsfeed = () => {
  return (
    <div>
      <PostInput />
      <PostList />
    </div>
  );
};

export default Newsfeed;
