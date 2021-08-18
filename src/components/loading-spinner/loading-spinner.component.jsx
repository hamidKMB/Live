import React from "react";

import "./loading-spinner.styles.scss"

const BubbleSpinner = (props) => {
    return(
        <div className="loader" style={{color: `${props.color}`}}>Loading</div>
    )
}

export default BubbleSpinner