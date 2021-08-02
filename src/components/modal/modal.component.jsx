import React from "react";

import "./modal.styles.scss";

const Modal = (props) => {
  return (
    <div className="modal-custom">
      <div className="black-overlay" onClick={props.closeModal}/>
        <div className="main-modal">
          <div className="content-in-modal">
            Hello

          </div>
        </div>
    </div>
  );
};

export default Modal;