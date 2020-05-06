import React, { useState, Fragment } from "react";

const withModal = (WrappedComponent, ModalComponent) => {
  const Modal = ({ isEdit, post, ...props }) => {
    const [showModal, setShowModal] = useState(false);

    const onToggleModal = () => {
      setShowModal((prevState) => !prevState);
    };
    return (
      <Fragment>
        <WrappedComponent toggleModal={onToggleModal} {...props} />
        {showModal && (
          <ModalComponent
            toggleModal={onToggleModal}
            isEdit={isEdit}
            post={post}
          />
        )}
      </Fragment>
    );
  };
  return Modal;
};

export default withModal;
