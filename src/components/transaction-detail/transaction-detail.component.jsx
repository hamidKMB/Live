import React from 'react'

import "./transaction-detail.styles.scss"

const TransactionDetail = (props) => {
  return props.tasfie ? (
    <tr className="text-center border-1 rounded-3 bg-white d-flex flex-row align-items-center justify-content-evenly pt-2 pe-1 pb-2 mb-2">
      <td>{props.shenase}</td>
      <td>{props.requestDate}</td>
      <td>{props.tasfieTill}</td>
      <td>{props.tasfieItems}</td>
      <td>{props.price}</td>
      <td
        style={
          props.situation === "در حال بررسی"
            ? { color: "orange" }
            : props.situation === "رد شده" 
            ? { color: "red" }
            : { color: "green"}
        }
      >
        {props.situation}
      </td>
    </tr>
  ) : (
    <tr className="border-1 rounded-3 bg-white d-flex flex-row align-items-center justify-content-evenly pt-2 pe-1 pb-2 mb-2">
      <td>{props.shenasePardakht}</td>
      <td>{props.description}</td>
      <td style={props.bardasht ? { color: "red" } : { color: "green" }}>
        {props.price}
      </td>
      <td>{props.date}</td>
    </tr>
  );
}

export default TransactionDetail;