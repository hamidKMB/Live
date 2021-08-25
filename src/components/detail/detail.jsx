import React from "react";

import "./detail.styles.scss"

const Details = (props) => {
    return (
        <div className="detail py-1">
        <span className="m-0">
            <h6 className="m-0">{props.title}</h6>
        </span>
            {
                props.showAll &&
                <span className="look-all" onClick={props.onClick}>مشاهده همه</span>
            }
        </div>
    )
}

export default Details