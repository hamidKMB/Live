import React from "react";

import "./modal.styles.scss";

const Modal = (props) => {
  return (
    <div className="background-black" onClick={props.closeModal}>
      <div className="main-modal">
        <div className="content-in-modal">asdasdasdasdsd</div>
      </div>
    </div>
  );
};

export default Modal;