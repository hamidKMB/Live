import React from "react"


const ShebaDetail = (props) => {
    return (
      <tr className="td-holder-sheba border border-1 rounded-3 py-1 px-3 mb-3 bg-white d-flex flex-row mx-3">
        <td className="border-0 w-25 fw-bold">{props.code}</td>
        <td className="border-0 fw-bold">{props.sheba}</td>
        <td className="border-0 situation-of-number d-flex flex-row justify-content-start">
          {props.confirmed ? (
            <span className="mx-auto">ثبت شده</span>
          ) : (
            <span className="mx-auto"> </span>
          )}
          <span
            className={`${props.confirmed ?" mx-auto " : "me-auto"}`}
            style={props.confirmed ? { color: "green" } : { color: "red" }}
          >
            تایید {props.confirmed ? <>شده</> : <>نشده</>}
          </span>
          <span
            className="mx-auto"
            style={props.confirmed ? { color: "green" } : { color: "red" }}
          >
            {props.confirmed ? <>معتبر</> : <>Logo</>}
          </span>
        </td>
        <td className="border-0">
          <span
            className={`border border-1 m-0 py-1 rounded-3   ${
              props.default ? "px-5 border-warning text-warning" : "px-3"
            }`}
            onClick={props.onClick}
          >
            {props.default ? <>پیشفرض درگاه</> : <>انتخاب به عنوان پیشفرض</>}
          </span>
        </td>
      </tr>
    );
}

export default ShebaDetail