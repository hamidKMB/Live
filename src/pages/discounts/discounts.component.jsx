//REACT
import React from "react";
import TicketDetail from "../../components/ticket-details/ticket-detail.component";
import { useHistory } from "react-router";
import { ReactComponent as CreateNewDiscountLogo } from "../events/Upload-Live/new-discount-logo.svg";

//STYLES
import "../tickets/ticket.styles.scss";

const Discounts = () => {
  const history = useHistory();

  const [isClickedRow, setIsClickedRow] = React.useState({
    isClicked: false,
    title: "",
    percent: "",
    eventName: ""
  });

  const clickCheck = (event) => {
    let title, percent, eventName, name, selectedRow;
    if (event.target.localName === "svg") {
      selectedRow =
        event.target.parentElement.parentElement.parentElement.childNodes;
      name = event.target.attributes[4].nodeValue;
    } else {
      selectedRow =
        event.target.parentElement.parentElement.parentElement.parentElement
          .childNodes;
      name = event.target.nearestViewportElement.attributes[4].nodeValue;
    }
    if (name === "informationTicket") {
      if (event.target.localName === "svg") {
        title = selectedRow[0].innerText;
        percent = selectedRow[1].innerText;
        eventName = selectedRow[4].innerText;
      } else {
        title = selectedRow[0].innerText;
        percent = selectedRow[1].innerText;
        eventName = selectedRow[4].innerText;
      }
      setIsClickedRow({
        isClicked: true,
        title: title,
        percent: percent,
        eventName: eventName
      });
    }
  };

  const backToHome = () => {
    setIsClickedRow({
      isClicked: false,
      title: "",
      price: "",
    });
  };
  return (
    <div className="admin-pages-layout ticket-layout">
      {!isClickedRow.isClicked ? (
        <>
          <div className="ticket-header d-flex flex-row align-items-center container mb-5">
            <h5 className="mb-0">لیست تخفیف ها</h5>
            <div
              className="button rounded-3 me-auto"
              onClick={() => history.push("/discounts/create-new-discount")}
            >
              +ایجاد تخفیف جدید
            </div>
          </div>
          <div className="overflow-auto">
            <table className="table">
              <thead className="thead-ticket">
                <tr className="th-holder-ticket mb-3 d-flex flex-row w-100 bg-white shadow-sm">
                  <th className="border-0 w-25 text-center" scope="col">
                    عنوان
                  </th>
                  <th className="border-0 w-25 text-center" scope="col">
                    کد تخفیف
                  </th>
                  <th className="border-0 w-25 text-center" scope="col">
                    مقدار تخفیف
                  </th>
                  <th className="border-0 w-25 text-center" scope="col">
                    ظرفیت
                  </th>
                  <th className="border-0 w-25 text-center" scope="col">
                    رویداد
                  </th>
                  <th className="border-0 w-25 text-center" scope="col"></th>
                </tr>
              </thead>
              <tbody className="tbody-ticket">
                <tr className="td-holder-ticket">
                  <TicketDetail
                    title="asnaljd"
                    discountCode="2500"
                    capacity="20"
                    event="شسیشسی"
                    discountValue="20"
                    onClick={clickCheck}
                    discountComponent
                  />
                  <TicketDetail
                    title="asnaljd"
                    discountCode="2500"
                    capacity="20"
                    event="شسیشسی"
                    discountValue="20"
                    onClick={clickCheck}
                    discountComponent
                  />
                  <TicketDetail
                    title="asnaljd"
                    discountCode="2500"
                    capacity="20"
                    event="شسیشسی"
                    discountValue="20"
                    onClick={clickCheck}
                    discountComponent
                  />
                  <TicketDetail
                    title="asnaljd"
                    discountCode="2500"
                    capacity="20"
                    discountValue="20"
                    event="شسیشسی"
                    onClick={clickCheck}
                    discountComponent
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="ticket-header width d-flex flex-row align-items-center mb-5">
            <h5 className="mb-0">
              جزئیات تخفیف {isClickedRow.title} ({isClickedRow.percent}){" "}
            </h5>
            <div className="button me-auto ms-2 rounded-3 py-2">
              خروجی از لیست
            </div>
            <div
              className="button-outline rounded-3 py-2 ms-md-5"
              onClick={backToHome}
            >
              بازگشت
            </div>
          </div>
          <h5 className="sold-ticket mb-4">
            تمام (number) بلیط ایجاد شده به فروش رسیده است
          </h5>
          <div className="d-flex flex-row w-100">
            <div className="table-holder w-100">
              <table className="table">
                <thead className="thead-ticket">
                  <tr className="th-holder-ticket mb-3 d-flex flex-row w-100 bg-white shadow-sm align-items-center px-1">
                    <th className="border-0 w-25 text-center" scope="col">
                      استفاده شده توسط
                    </th>
                    <th className="border-0 w-25 text-center" scope="col">
                      رویداد
                    </th>
                    <th className="border-0 w-25 text-center" scope="col">
                      مبلغ پرداختی
                    </th>
                    <th className="border-0 w-25 text-center" scope="col">
                      تاریخ استفاده
                    </th>
                  </tr>
                </thead>
                <tbody className="tbody-ticket">
                  <tr className="td-holder-ticket">
                    <TicketDetail
                      informationTicket
                      discountComponentClicked
                      personName="علی"
                      eventName={isClickedRow.eventName}
                      paid="20"
                      boughtDate="22:30 - 1400/02/01 "
                    />
                  </tr>
                </tbody>
              </table>
            </div>
            <CreateNewDiscountLogo className="d-md-block d-none me-4" />
          </div>
        </>
      )}
    </div>
  );
};

export default Discounts;
