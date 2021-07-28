import React from "react";

import {ReactComponent as ThreeDotHorizontal} from "./three_dots_vertical.svg"

import "../../root-styles/cards.scss"
import "./event.styles.scss";
import "../../root-styles/buttons.scss";

const Event = (props) => {
    return(
        <div className= "card card-event col-lg-6" >
            <div className= "image-holder">
                <img src={props.image}/>
            </div>
            <div className="other-detail-event">
                <div className="title-and-date">
                    <span>{props.title}</span>
                    <div> 
                        <span>{props.date}</span>
                        <span><ThreeDotHorizontal/></span>
                    </div>
                </div>
                <span>{props.genere}</span>
                <span>{props.timeLeftToStart}</span>
                <div className="button-holder">
                    <div className="button-outline">
                        برو به کنترل پنل
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;