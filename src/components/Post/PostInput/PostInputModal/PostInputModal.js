import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost, updatePost } from "../../../../redux/posts/postActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../../redux/users/userSelector";

import Title from "../../../shared/Title/Title";
import InputFile from "../../../shared/InputFile/InputFile";
import Button from "../../../shared/Button/Button";

import { PostInputModalContainer } from "./PostInputModalStyle";
import { PostTextarea, PostInputForm, PostInputGroup } from "../PostInputStyle";
import BackgroundOverlay from "../../../../styles/shared/BackgroundOverlay";
import Card from "../../../../styles/shared/Card";
import Avatar from "../../../../styles/shared/Avatar";
import { GreyButton } from "../../../shared/Button/ButtonStyle";
import UploadImagePlaceholder from "../../../../styles/shared/UploadImagePlaceholder";

import placeholder from "../../../../assets/upload-image-placeholder.png";

const PostInputModal = ({
  post,
  currentUser,
  isEdit,
  toggleModal,
  createPost,
  updatePost,
}) => {
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(placeholder);

  useEffect(() => {
    if (post) {
      setText(post.text);
      setImageFile(null);
      if (post.image) setImagePreview(post.image);
      else setImagePreview(placeholder);
    }
    //eslint-disable-next-line
  }, []);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onChangeFile = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setImageFile(event.target.files[0]);
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onCloseImage = () => {
    setImageFile(null);
    setImagePreview(placeholder);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      return console.log("post description cannot be empty");
    }
    if (isEdit) updatePost(text, imageFile, post.id);
    else createPost(text, imageFile);
    toggleModal();
  };

  return (
    <PostInputModalContainer>
      <BackgroundOverlay>
        <Card pd="0" mt="10rem" width="66.5rem">
          <Title pd="2rem">Create Post</Title>
          <GreyButton onClick={toggleModal}>X</GreyButton>
          <PostInputForm modalPadding onSubmit={onSubmit}>
            <PostInputGroup>
              <Avatar src={currentUser.profile.avatar} />
              <PostTextarea
                placeholder="What's on your mind?"
                onChange={onChange}
                value={text}
              />
            </PostInputGroup>
            <InputFile id="upload-image" onChange={onChangeFile}>
              <UploadImagePlaceholder src={imagePreview} />
              {imageFile && (
                <GreyButton onClick={onCloseImage} type="button">
                  X
                </GreyButton>
              )}
            </InputFile>
            <Button block type="submit">
              Publish
            </Button>
          </PostInputForm>
        </Card>
      </BackgroundOverlay>
    </PostInputModalContainer>
  );
};

PostInputModal.propTypes = {
  post: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  isEdit: PropTypes.bool,
  toggleModal: PropTypes.func,
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { createPost, updatePost })(
  PostInputModal
);
