import React from "react";

import PostInput from "../../Post/PostInput/PostInput";
import PostList from "../../Post/PostList/PostList";

import { NewsFeedContainer } from "./NewsfeedStyle";

const Newsfeed = () => {
  return (
    <NewsFeedContainer>
      <PostInput />
      <PostList />
    </NewsFeedContainer>
  );
};

export default Newsfeed;
