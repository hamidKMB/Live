import React from "react";

import "./transaction.styles.scss";


const Transaction = (props) => {
    return (
      <span className="transaction">
        <div className="dot-div"></div>
        <div className="text-div w-100 d-flex flex-row-reverse justify-content-between">
          <span
            className="text-span"
            style={
              props.typeOfTransaction === "برداشت" ? { color: "red" } : { color: "green" }
            }
          >
            {props.price}
          </span>
          <span className="text-span">{props.typeOfTransaction}</span>
        </div>
      </span>
    );
}

export default Transaction
