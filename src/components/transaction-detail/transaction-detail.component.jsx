import React from 'react'

import "./transaction-detail.styles.scss"

const TransactionDetail = (props) => {
    return (
      <tr className="border-1 rounded-3 d-flex flex-row align-items-center justify-content-evenly w-75 pt-2 pe-1 pb-2 mb-2">
        <td>{props.shenasePardakht}</td>
        <td>{props.description}</td>
        <td style={props.bardasht ? {color: "red"} : {color: "green"}}>{props.price}</td>
        <td>{props.date}</td>
      </tr>
    );
}

export default TransactionDetail;