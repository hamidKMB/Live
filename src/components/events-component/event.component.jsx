import React from "react";

import {ReactComponent as ThreeDotHorizontal} from "./three_dots_vertical.svg"
import { useHistory } from "react-router";
import "../../root-styles/cards.scss"
import "./event.styles.scss";
import "../../root-styles/buttons.scss";

const Event = (props) => {
    const [isMenuOpen , setIsMenuOpen] = React.useState(false)
    const mouseHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const history = useHistory();
    return (
      <div className="c col-lg-6">
        <div className="card card-event">
          <div className="image-holder">
            <img src={props.image} alt="video" />
          </div>
          <div className="other-detail-event">
            <div className="title-and-date">
              <span>{props.title}</span>
              <div>
                <span>{props.date}</span>
                <span className="three-dot-hover" onMouseEnter={mouseHandler} onMouseLeave={mouseHandler}>
                  <ThreeDotHorizontal className="three-dot"/>
                  {
                    isMenuOpen &&
                      <div className="card d-flex flex-column justify-content-start menu-on-three-dot w-auto p-2 ps-4 h-auto position-absolute ">
                          <span className="mb-2" onClick={() => history.push("/events/chat")}>صفحه چت</span>
                          <span className="mb-2">ویرایش</span>
                          <span>حذف</span>
                      </div>
                  }  
                </span>
              </div>
            </div>
            <span>{props.genere}</span>
            <span className="date-red">{props.timeLeftToStart}</span>
            <div className="button-holder">
              <div className="button-outline event-button">
                برو به کنترل پنل
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Event;
