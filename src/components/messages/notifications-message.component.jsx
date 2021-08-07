import React from "react";

import "./notifications-message.styles.scss"

const NotificationMessage = (props) => {
    return (
        <div className="notification-message">
            <p>
                {props.notifMessage}    
            </p>
            <span>
                <span> {props.date} </span> - <span> {props.time} </span>
            </span>
        </div>
    )
}

export default NotificationMessage;