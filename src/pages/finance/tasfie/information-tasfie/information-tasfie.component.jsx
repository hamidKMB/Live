import React from "react";

import "./information-tasfie.styles.scss";
import InfoItem from "./items/items.component";


const InformationTasfie = (props) => {
    return (
      <div className="holder">
        <div className="header-detail d-flex flex-row align-items-center px-2 mb-3">
          <h5>جزئیات درخواست تسویه</h5>
          <div
            className="button-outline me-auto rounded-2 px-4 py-2"
            onClick={props.return}
          >
            بازگشت
          </div>
        </div>
        <div
          style={
            props.situation === "رد شده"
              ? { backgroundColor: "red" }
              : props.situation === "واریز شده"
              ? { backgroundColor: "green" }
              : { backgroundColor: "orange" }
          }
          className="text-end mx-1 text-white rounded-3 p-3 mb-4"
        >
          {props.situation === "واریز شده" ? (
            <p className="m-0 fw-light">
              درخواست تسویه حساب به صورت کامل پردازش و فرآیند واریز با موفقیت
              انجام و تکمیل شده است.
            </p>
          ) : props.situation === "رد شده" ? (
            <p className="m-0 fw-light">درخواست شما رد شده</p>
          ) : (
            <p className="m-0 fw-light">درخواست شما در دست بررسی میباشد</p>
          )}
        </div>
        <div className="row px-4">
          <InfoItem title="شناسه تسویه حساب" body={props.shenase} />
          <InfoItem
            title="تاریخ ثبت درخواست"
            body={props.dateOfSubmitRequest}
          />
          <InfoItem title="تسویه تا تاریخ" body={props.tasfieTillDate} />
          <InfoItem
            title="تعداد تراکنش های تسویه حساب"
            body={props.tasfieItems}
          />
          <InfoItem
            title="مبلغ کل تراکنش تسویه حساب"
            body={props.variziMablaq}
          />
          <InfoItem title="جمع خالص تسویه حساب" body="1500 تومان" />
        </div>
        <div className="bg-white rounded-3 text-break shadow-none border border-2 p-2 mt-3">
          Some Text
        </div>
        <table className="bg-white table border border-2 rounded-3 mt-3">
          <tr className="bg-light text-center" id="head-row">
            <th scope="col" className="border-0">
              ترمینال
            </th>
            <th scope="col" className="border-0">
              تعداد تراکنش
            </th>
            <th scope="col" className="border-0">
              جمع کل
            </th>
            <th scope="col" className="border-0">
              مجموع کارمزد
            </th>
            <th scope="col" className="border-0">
              جمع خالص تسویه
            </th>
            <th scope="col" className="border-0">
              وضعیت
            </th>
          </tr>
          <tr className="bg-white text-center position-relative" id="special">
            <td className="border-0">ترمینال</td>
            <td className="border-0">{props.tasfieItems}</td>
            <td className="border-0">{props.variziMablaq}</td>
            <td className="border-0">sad</td>
            <td className="border-0">1500 تومان</td>
            <td className="border-0"> {props.situation} </td>
          </tr>
          <tr className="bg-white text-end">
            <td colSpan="6" className="pe-2">
                asdjnasjdnasjdnjlsandaskndjlasndlasjndl
            </td>
          </tr>
        </table>
      </div>
    );
}

export default InformationTasfie