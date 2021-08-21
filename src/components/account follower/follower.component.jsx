import React from "react"

import "./style.style.scss";

const Follower = (props) => {
    return (
      <div className="detail-holder d-flex flex-row py-3">
        <div>
          <img src={props.image} alt="#" />
        </div>
        <div className="d-flex flex-column justify-content-end">
          <h5>{props.name}</h5>
          <p>
            <span>دنبال کننده {props.followersNumber}</span>
            <span>ویدیو {props.videosNumber}</span>
          </p>
        </div>
        <div className="button-outline">مشاهده کانال</div>
      </div>
    );
}

export default Follower