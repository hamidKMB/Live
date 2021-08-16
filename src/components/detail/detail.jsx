import React from "react";

import "./detail.styles.scss"

const Details = (props) => {
    return (
        <div className="detail">
        <span>
            <h6>{props.title}</h6>
        </span>
            {
                props.showAll ?
                <span className="look-all">مشاهده همه</span> :
                null
            }
        </div>
    )
}

export default Details