import React from "react";

import "./message-chat.scss";

const PublicChat = (props) => {
  return (
    <div className="message-chat d-flex flex-row align-items-start justify-content-start px-2 py-1 w-75 mb-2">
      <img
        src="./WhatsApp Image 2021-06-22 at 13.15.45 - Copy.jpeg"
        alt="p"
        className="ms-3"
        onClick={props.onClick}
      />
      <span className="ms-1 text-nowrap" onClick={props.onClick}>
        {props.userId} :
      </span>
      <p className="m-0 fw-bold text-break"> {props.userMessagePreview} </p>
    </div>
  );
};

export default PublicChat;
