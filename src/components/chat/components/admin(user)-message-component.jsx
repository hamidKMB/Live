import React from "react";

const UserMessage = (props) => {
  return (
    <div className="d-flex flex-row-reverse align-items-start justify-content-start me-auto mb-2 px-2 py-1 w-75">
      <img
        src="./WhatsApp Image 2021-06-22 at 13.15.45 - Copy.jpeg"
        alt="p"
        className="me-3"
      />
      <span className="ms-1 text-nowrap"> : شما </span>
      <p className="m-0 fw-bold text-break"> {props.userMessagePreview} </p>
    </div>
  );
};

export default UserMessage;
