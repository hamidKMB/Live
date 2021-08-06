import React from "react";

import "./transaction.styles.scss";


const Transaction = (props) => {
    return (
      <span className="transaction">
        <div class="dot-div"></div>
        <div class="text-div w-100 d-flex flex-row-reverse justify-content-between">
          <span
            class="text-span"
            style={props.bardasht ? { color: "red"} : {color : "green"}}
          >
            {props.price}
          </span>
          <span class="text-span">{props.typeOfTransaction}</span>
        </div>
      </span>
    );
}

export default Transaction
