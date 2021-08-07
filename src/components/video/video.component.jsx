import React from "react";

import {ReactComponent as ThreeDotLogo} from "../events-component/three_dots_vertical.svg"
import {ReactComponent as Like} from "../../Icon/like__2_.svg";
import {ReactComponent as Chat} from "../../Icon/chat.svg";
import {ReactComponent as Eye} from "../../Icon/view.svg";
import {ReactComponent as Shop} from "../../Icon/shop.svg"
import {ReactComponent as Watch} from "./watch.svg";
import {ReactComponent as Play} from "./playlogo.svg";
import {Link, useRouteMatch} from "react-router-dom";

import "./video.styles.scss";

const Video = (props) => {
    const { url } = useRouteMatch()
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 card-grid">
            <div className="card card-video">
            <div className="image">
            <img src="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"/>
            {
            props.course ?
                <Link to={`/videos/courses/${props.title}`}>
                    <div className="play-all">
                        <span>
                            <Play className="play-logo"/>
                            پخش همه
                        </span>
                        <span>
                            {props.number}   ویدیو
                        </span>
                    </div>
                </Link>
                :
                <div className="time">
                    {props.time}
                </div>                
            }
            </div>
                 <div className="title-video">
                    <span>
                        {props.title}
                        <ThreeDotLogo/>
                    </span>
                 </div>
                 { props.course ?
                    <span className="date-created">
                        {props.register}
                     </span>
                     :
                     <span className="cost">
                        {props.cost}
                     </span>
                 }
                 <span className="date-created">
                    تاریخ ایجاد:  {props.dateCreated}
                 </span>
                 {
                     !props.course && 
                     <div className="published">
                        <span>
                        منتشر شود
                        </span>
                        <span>
                            Switch
                        </span>
                     </div>
                 }
                 <div className={`views-likes-etc ${props.course && 'after'}`}>
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
                        {!props.course &&
                            props.bought && 
                            <span>
                                <Shop className="logo"/> 
                                {props.bought} 
                            </span> 
                        }
                 </div>
                 {
                     props.course &&
                     <div className="cost-and-detail-course">
                            <span>
                            {
                                props.done ?
                                    <span className="watch-green">
                                        <Watch className="watch-logo"/>تکمیل شده
                                    </span>
                                :
                                    <span className="watch-default">
                                        <Watch className="watch-logo"/>درحال برگزاری
                                    </span>
                            }
                            </span>
                            <span className="cost-course">
                            {props.cost}
                            </span>
                     </div>
                 }
            </div>
        </div>
    )
}

export default Video;