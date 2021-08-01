import React from "react";
import Video from "../../../components/video/video.component";
import "./uploaded-videos.styles.scss";
 
const UploadedVideos = () => {
    return (
        <div className="row">
            <Video 
                image="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
                time="22:30"
                title="لورم ایپسوم"
                cost="4500 تومان"
                dateCreated="1394/05/21"
                views="340k"
                likes="700"
                comments="20"
                bought="7"
            />
            <Video 
                image="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
                time="22:30"
                title="لورم ایپسوم"
                cost="4500 تومان"
                dateCreated="1394/05/21"
                views="340k"
                likes="700"
                comments="20"
                bought="7"
            />
            <Video 
                image="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
                time="22:30"
                title="لورم ایپسوم"
                cost="4500 تومان"
                dateCreated="1394/05/21"
                views="340k"
                likes="700"
                comments="20"
                bought="7"
            />
        </div>
    )
}

export default UploadedVideos