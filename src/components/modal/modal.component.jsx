import React from "react";

import "./modal.styles.scss";

import { ReactComponent as CrossLogo } from "./crossMark.svg";
const Modal = (props) => {
  return (
    <div className="modal-custom" style={{display:`${props.isShow ? "inline-flex" : "none"}`}}>
      <div className="black-overlay"/>
        <div className="main-modal">
          <div className="content-in-modal">
            <CrossLogo className="cross-logo" onClick={props.closeModal}/>
            {props.children}
          </div>
        </div>
    </div>
  );
};

export default Modal;