import React from "react"

import "./items.styles.scss"

const InfoItem = (props) => {
    return (
      <div className="c col-md-4 col-sm-6 col-12 mb-4">
        <div className="card shadow-none border border-2 p-4 text-center justify-content-center h-100">
          <h6>{props.title}</h6>
          <span>{props.body}</span>
        </div>
      </div>
    );
}

export default InfoItem