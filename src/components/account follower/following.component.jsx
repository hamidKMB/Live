import React from "react";
import {ReactComponent as CheckedLogo} from "./checked.svg";
import "./style.style.scss" 
import Logo from "../../pages/followers/WhatsApp Image 2021-06-22 at 13.15.45.jpeg";
const Following = (props) => {
    const [isFollowed, setIsFollowed] = React.useState(props.isUserFollowedBack)

    return (
      <div className="detail-holder d-flex flex-row py-3">
        <div className="image-holder ms-3">
          <img src={Logo} alt="#" />
        </div>
        <div className="d-flex flex-column justify-content-end detail-holder-number">
          <h5>{props.name}</h5>
          <p className="mt-auto mb-0">
            <span>{props.followersNumber}دنبال کننده </span>
            <span>{props.videosNumber} ویدیو </span>
          </p>
        </div>
        {isFollowed ? (
          <div
            className="button-outline me-auto my-auto py-2"
            onClick={() => setIsFollowed(false)}
          >
            <CheckedLogo className="checked-logo" /> دنبال شده
          </div>
        ) : (
          <div
            className="button me-auto my-auto py-2"
            onClick={() => setIsFollowed(true)}
          >
            + دنبال کردن
          </div>
        )}
      </div>
    );
};

export default Following;
