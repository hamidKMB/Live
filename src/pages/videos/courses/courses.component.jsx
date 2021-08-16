import React from "react";
import Video from "../../../components/video/video.component";
import "./courses.styles.scss";
const Courses = () => {
    return (
        <div className="row">
            <Video 
                image="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
                time="22:30"
                title="لورم ایپسوم"
                register="115 نفر ثبت نام کرده اند"
                dateCreated="1394/05/21"
                views="340k"
                cost="4500 تومان"
                likes="700"
                comments="20"
                bought="7"
                number="5"
                course
                done
            />
            <Video 
                image="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
                time="22:30"
                title=" شسیسشیلورم ایپسوم"
                register="115 نفر ثبت نام کرده اند"
                cost="4500 تومان"
                dateCreated="1394/05/21"
                views="340k"
                likes="700"
                comments="20"
                bought="7"
                number="5"
                course
            />
            <Video 
                image="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
                time="22:30"
                title="لورمشسیشسی ایپسوم"
                cost="4500 تومان"
                dateCreated="1394/05/21"
                views="340k"
                likes="700"
                comments="20"
                bought="7"
                register="115 نفر ثبت نام کرده اند"
                number="5"
                course
            />
        </div>
    )
}

export default Courses