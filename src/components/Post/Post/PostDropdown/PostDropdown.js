import React from "react";

import PostInputModal from "../../PostInput/PostInputModal/PostInputModal";

import withModal from "../../../shared/HOC/withModal/withModal";

import Dropdown, { DropdownOption } from "../../../../styles/shared/Dropdown";
import { EditIcon, TrashIcon } from "../../../../styles/shared/Icons";

const PostDropdown = ({
  toggleModal,
  toggleDropdown,
  showDropdown,
  deletePost,
}) => {
  const onEditPost = () => {
    toggleModal();
    toggleDropdown();
  };

  return (
    showDropdown && (
      <Dropdown>
        <DropdownOption onClick={onEditPost}>
          <EditIcon />
          <p>Edit</p>
        </DropdownOption>
        <DropdownOption onClick={deletePost}>
          <TrashIcon />
          <p>Delete</p>
        </DropdownOption>
      </Dropdown>
    )
  );
};

export default withModal(PostDropdown, PostInputModal);
