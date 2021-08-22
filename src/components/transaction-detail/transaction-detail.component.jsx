import React from 'react'

import "./transaction-detail.styles.scss"
import InfoIcon from "@material-ui/icons/Info";

const TransactionDetail = (props) => {
  const [isMouseIn, setIsMouseIn] = React.useState(false)

  return props.tasfie ? (
    <tr className="sv border-1 rounded-3 bg-white d-flex flex-row align-items-center mb-2 p-2 w-75">
      <td className="border-0" name="shenase">
        {props.shenase}
      </td>
      <td className="border-0" name="dateOfSubmitRequest">
        {props.requestDate}
      </td>
      <td className="border-0" name="tasfieTillDate">
        {props.tasfieTill}
      </td>
      <td className="border-0" name="tasfieItems">
        {props.tasfieItems}حواله{" "}
      </td>
      <td className="border-0" name="variziMablaq">
        {props.price}
      </td>
      <td
        className="border-0"
        name="situation"
        style={
          props.situation === "در حال بررسی"
            ? { color: "orange" }
            : props.situation === "رد شده"
            ? { color: "red" }
            : { color: "green" }
        }
      >
        {props.situation}
      </td>
      <td className="border-0">
        <span
          onMouseEnter={() => setIsMouseIn(true)}
          onMouseLeave={() => setIsMouseIn(false)}
          className="position-relative"
        >
          <InfoIcon className="info-icon" onClick={props.onClick} />
          {isMouseIn && (
            <div className="tip">
              <span className="triangle" />
              جزئیات درخواست
            </div>
          )}
        </span>
      </td>
    </tr>
  ) : (
    <tr className="sv border-1 rounded-3 bg-white d-flex flex-row align-items-center mb-2 p-2">
      <td className="border-0">{props.shenasePardakht}</td>
      <td className="border-0">{props.description}</td>
      <td
        className="border-0"
        style={props.bardasht ? { color: "red" } : { color: "green" }}
      >
        {props.price}
      </td>
      <td className="border-0">{props.date}</td>
    </tr>
  );
}

export default TransactionDetail;