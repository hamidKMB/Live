import React from "react";
import { useParams, useHistory } from "react-router-dom";
import MyImage from "./8_crete_live_3___1.png";
import CourseChapter from "./course-chapter.component";
import "./course-sections.styles.scss";

const CourseSections = () => {
    const {tab} = useParams();
    const history = useHistory();
    return (
      <div className="courses-section-layout">
        <div className="videos-detail container mt-5 pe-lg-5 d-flex align-items-center">
          <h5 className="ms-auto">{tab}</h5>
          <div
            className="upload button upload-video ms-2 rounded-3"
            onClick={() => history.push("/videos/upload-video")}
          >
            آپلود ویدیو های جدید
          </div>
          <div
            className="return button-outline px-4 rounded-3"
            onClick={() => history.push("/videos/courses")}
          >
            بازگشت
          </div>
        </div>
        <div className="container mt-5 pe-lg-5 d-flex flex-column align-items-center">
          <CourseChapter
            imageSrc={MyImage}
            time="22:50"
            title="لورم ایپسوم"
            date="1400/02/02"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            price="25000 تومان"
            views="25k"
            likes="20"
            comments="10"
          />
          <CourseChapter
            imageSrc={MyImage}
            title="لورم ایپسوم"
            date="1400/02/02"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            views="25k"
            likes="20"
            comments="10"
          />
        </div>
      </div>
    );
}

export default CourseSections;