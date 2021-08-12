import React from "react";

import "./private-chat-side.styles.scss";

const PrivateChatSide = (props) => {
    return(
        <div className="private-chat-side d-flex flex-row align-items-center p-2">
            <img src="./WhatsApp Image 2021-06-22 at 13.15.45 - Copy.jpeg" alt="p" className="m-3"/>
            <div className="d-flex flex-column justify-content-evenly align-items-start message-preview">
                <span> {props.userId} </span>
                <p> {props.userMessagePreview} </p>
            </div>
            <span> {props.numberOfUnreadMessages} </span>
        </div>
    )
}

export default PrivateChatSide;