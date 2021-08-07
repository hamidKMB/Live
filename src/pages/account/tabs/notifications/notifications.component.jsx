import React from "react";

import NotificationMessage from "../../../../components/messages/notifications-message.component";

import "./notifications.styles.scss";

const Notifications = () => {
    return (
        <div className= "notifications">
            <div className="head">
                <h3 className="settings-detail">اعلان ها</h3>
                <div className="time-day-box">
                    <span>
                        امروز
                    </span>
                    <span>
                        /\
                    </span>
                </div>
            </div>
            <NotificationMessage notifMessage="لورم ایپسوم" time="now" date="now" />
            <NotificationMessage notifMessage="لورم ایپسوم" time="now" date="now" />
            <NotificationMessage notifMessage="لورم ایپسوم" time="now" date="now" />
            <NotificationMessage notifMessage="لورم ایپسوم" time="now" date="now" />
            <NotificationMessage notifMessage="لورم ایپسوم" time="now" date="now" />
        </div>
    )
}

export default Notifications;