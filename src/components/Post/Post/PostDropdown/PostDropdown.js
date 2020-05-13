import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";

import PostInputModal from "../../PostInput/PostInputModal/PostInputModal";
import withModal from "../../../shared/HOC/withModal/withModal";

import useClickOutside from "../../../../CustomHook/useClickOutside";

import Dropdown, { DropdownOption } from "../../../../styles/shared/Dropdown";
import { EditIcon, TrashIcon } from "../../../../styles/shared/Icons";

const PostDropdown = ({
  deletePost,
  showDropdown,
  toggleModal,
  toggleDropdown,
  closeDropdown,
}) => {
  const dropdownRef = useRef();
  useClickOutside(dropdownRef, closeDropdown);

  const onEditPost = useCallback(() => {
    toggleModal();
    toggleDropdown();
  }, [toggleModal, toggleDropdown]);

  return (
    showDropdown && (
      <Dropdown ref={dropdownRef}>
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

PostInputModal.propTypes = {
  toggleModal: PropTypes.func,
  toggleDropdown: PropTypes.func,
  showDropdown: PropTypes.bool,
  deletePost: PropTypes.func,
};

export default withModal(PostDropdown, PostInputModal);
