import React from "react"
import { ReactComponent as ThreeDotLogo } from "../../../../components/events-component/three_dots_vertical.svg";
import { ReactComponent as Like } from "../../../../Icon/like__2_.svg";
import { ReactComponent as Chat } from "../../../../Icon/chat.svg";
import { ReactComponent as Eye } from "../../../../Icon/view.svg";
import "./course-chapter.styles.scss"

const CourseChapter = (props) => {
    return (
      <div className="chapter-part-holder card w-100 d-flex flex-row justify-content-start p-1 mb-4">
        <div className="image-holder rounded-3 ms-2 position-relative">
          <img
            src={props.imageSrc}
            alt="asdsad"
            className="rounded-3 w-100 h-100"
          />
          {props.time ? (
            <span className="time position-absolute bottom-0 start-0 ms-2 mb-1 text-light ">
              {props.time}
            </span>
          ) : (
            <span className="not-uploaded position-absolute top-0 end-0 me-3 mt-2 bg-light rounded-3 py-1 px-2">
              آپلود نشده
            </span>
          )}
        </div>
        <div className="others d-flex flex-column align-items-baseline w-100">
          <div className="title-date-option d-flex flex-row align-items-center w-100 mb-2">
            <h6 className="ms-auto mb-0">{props.title}</h6>
            <span className="mb-0 ms-1">{props.date}</span>
            <ThreeDotLogo className="three-dot" />
          </div>
          <div className="desctiption my-auto ps-4 w-100">
            <p>{props.description}</p>
          </div>
          <div className="comment-view-like-price w-100 d-flex flex-row align-items-center">
            <span className="price text-danger ms-4">
              {props.price ? props.price : "رایگان"}
            </span>
            <span className="views ms-4">
              <Eye className="eye ms-1" />
              <span className="numbers">{props.views}</span>
            </span>
            <span className="Likes ms-4">
              <Like className="like ms-1" />
              <span className="numbers">{props.likes}</span>
            </span>
            <span className="comments ms-4">
              <Chat className="chat ms-1" />
              <span className="numbers">{props.comments}</span>
            </span>
          </div>
        </div>
      </div>
    );
}

export default CourseChapter