import React from "react";
import DropDown from "../../../../components/drop-down/drop-down.component";

import NotificationMessage from "../../../../components/messages/notifications-message.component";

import "./notifications.styles.scss";

const Notifications = () => {
    return (
        <div className= "notifications">
            <div className="head">
                <h3 className="settings-detail">اعلان ها</h3>
                <DropDown 
                    items={[
                        'امروز',
                        'هفته گذشته',
                        'ماه گذشته',
                        'سال گذشته'
                    ]}
                />
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