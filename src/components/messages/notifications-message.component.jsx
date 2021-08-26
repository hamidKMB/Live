import React from "react";

import "./notifications-message.styles.scss"

const NotificationMessage = (props) => {
    return (
        <div className="notification-message">
            <p className="notification-title">
                {props.notifMessage}    
            </p>
            <span className="date-notif">
                {props.dateTime}
            </span>
        </div>
    )
}

export default NotificationMessage;