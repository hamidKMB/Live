import React from "react";

import "./messages.styles.scss"

const Message = (props) => {
    return (
      <div className="messages">
        <span className="message-text">{props.message}</span>
        <span className= {
            props.ticket ?
            "in-progress" 
            :
            null
        }
        >{props.messageDescription}</span>
      </div>
    );
}

export default Message