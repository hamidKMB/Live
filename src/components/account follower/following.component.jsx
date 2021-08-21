import React from "react";

import "./style.style.scss"

const Following = (props) => {
    const [isFollowed, setIsFollowed] = React.useState(false)

    return (
        <div className="detail-holder d-flex flex-row py-3">
        <div>
            <img src={props.image} alt="#" />
        </div>
        <div className="d-flex flex-column justify-content-end">
            <h5>{props.name}</h5>
            <p>
            <span>دنبال کننده {props.followersNumber}</span>
            <span>ویدیو { props.videosNumber}</span>
            </p>
        </div>
        {
            isFollowed ?
            <div className="button-outline" onClick={() => setIsFollowed(false)}>
                دنبال شده
            </div>
            :
            <div className="button" onClick={() => setIsFollowed(true)}>
                +دنبال کردن
            </div>
        }
        </div>
    );
};

export default Following;
