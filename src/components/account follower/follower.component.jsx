import React from "react"
import Logo from "../../pages/followers/WhatsApp Image 2021-06-22 at 13.15.45.jpeg";
import "./style.style.scss";

const Follower = (props) => {
    return (
      <div className="detail-holder d-flex flex-row py-3">
        <div className="image-holder ms-3">
          <img src={Logo} alt="#" />
        </div>
        <div className="d-flex flex-column justify-content-end detail-holder-number">
          <h5>{props.name}</h5>
          <p className="mt-auto mb-0">
            <span>دنبال کننده {props.followersNumber}</span>
            <span>ویدیو {props.videosNumber}</span>
          </p>
        </div>
        <div className="button-outline me-auto my-auto py-2">مشاهده کانال</div>
      </div>
    );
}

export default Follower