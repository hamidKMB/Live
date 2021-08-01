import React from "react";

import {ReactComponent as ThreeDotLogo} from "../events-component/three_dots_vertical.svg"
import {ReactComponent as Like} from "../../Icon/like__2_.svg";
import {ReactComponent as Chat} from "../../Icon/chat.svg";
import {ReactComponent as Eye} from "../../Icon/view.svg";
import {ReactComponent as Shop} from "../../Icon/shop.svg"
import "./video.styles.scss";

const Video = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 card-grid">
            <div className="card">
            <div className="image"  >
            <img src="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"/>
            <div className="time">
                {props.time}
            </div>
            </div>
                 <div className="title-video">
                    <span>
                        {props.title}
                        <ThreeDotLogo/>
                    </span>
                 </div>
                 <span className="cost">
                    {props.cost}
                 </span>
                 <span className="date-created">
                    تاریخ ایجاد:  {props.dateCreated}
                 </span>
                 <div className="published">
                    <span>
                    منتشر شود
                    </span>
                    <span>
                        Switch
                    </span>
                 </div>
                 <div className="views-likes-etc">
                    <span>
                        <Eye className="logo"/>
                        {props.views}
                    </span>
                    <span>
                    <Like className="logo"/>
                        {props.likes}
                    </span>
                    <span>
                        <Chat className="logo"/>
                        {props.comments}
                    </span>
                        {
                            props.bought && 
                            <span>
                                <Shop className="logo"/> 
                                {props.bought} 
                            </span> 
                        }
                 </div>
            </div>
        </div>
    )
}

export default Video;