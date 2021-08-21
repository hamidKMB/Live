import React from "react"


const ShebaDetail = (props) => {
    return (
      <tr className="td-holder-sheba border border-1 rounded-3 py-1 px-3 mb-3 bg-white d-flex flex-row mx-3">
        <td className="border-0 w-25 fw-bold">{props.code}</td>
        <td className="border-0 fw-bold">{props.sheba}</td>
        <td className="border-0 situation-of-number d-flex flex-row justify-content-start">
          {props.confirmed ? (
            <span className="mx-md-auto mx-sm-1">ثبت شده</span>
          ) : (
            <span className="mx-md-auto mx-sm-1"> </span>
          )}
          <span
            className={`${
              props.confirmed ? " mx-md-auto mx-2 " : "me-auto"
            }`}
            style={props.confirmed ? { color: "green" } : { color: "red" }}
          >
            تایید {props.confirmed ? <>شده</> : <>نشده</>}
          </span>
          <span
            className="mx-md-auto mx-sm-1"
            style={props.confirmed ? { color: "green" } : { color: "red" }}
          >
            {props.confirmed ? <>معتبر</> : <>Logo</>}
          </span>
        </td>
        <td className="border-0">
          <div
            className={`border border-1 m-0 py-1 rounded-3   ${
              props.default && "border-warning text-warning"
            }`}
            onClick={props.onClick}
          >
            {props.default ? (
              <span className="mb-0 mx-auto">پیشفرض درگاه</span>
            ) : (
              <span className="mb-0 mx-auto">انتخاب به عنوان پیشفرض</span>
            )}
          </div>
        </td>
      </tr>
    );
}

export default ShebaDetail