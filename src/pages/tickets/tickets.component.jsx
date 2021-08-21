//REACT
import React from "react";
import TicketDetail from "../../components/ticket-details/ticket-detail.component";
import { useHistory } from "react-router";
import {ReactComponent as CreateNewTicketLogo} from "../events/Upload-Live/new-ticket-logo.svg"

//STYLES
import "./ticket.styles.scss"

const Tickets = () => {
  const history = useHistory()
  
  const [isClickedRow , setIsClickedRow] = React.useState({
    isClicked: false,
    title: "",
    price: ""
  })
  
  const clickCheck = (event) => {
    let title, price, name, selectedRow;
    if (event.target.localName === "svg"){
      selectedRow = event.target.parentElement.parentElement.parentElement.childNodes
      name = event.target.attributes[4].nodeValue;
      }else {
        selectedRow = event.target.parentElement.parentElement.parentElement.parentElement
          .childNodes
        name = event.target.nearestViewportElement.attributes[4].nodeValue
      }
    if (name === "informationTicket") {
      if (event.target.localName === "svg") {
        title = selectedRow[0].innerText;
        price = selectedRow[1].innerText;
      } else {
        title = selectedRow[0].innerText;
        price = selectedRow[1].innerText;
      }
      setIsClickedRow({
        isClicked: true,
        title: title,
        price: price,
      });
    }
  }

  const backToHome = () => {
    setIsClickedRow({
      isClicked: false ,
      title: "",
      price: ""
    })
  }
  return (
    <div className="admin-pages-layout ticket-layout">
      {!isClickedRow.isClicked ? (
        <>
          <div className="ticket-header d-flex flex-row align-items-center container mb-5">
            <h5 className="mb-0">لیست بلیط ها</h5>
            <div
              className="button rounded-3 me-auto"
              onClick={() => history.push("/tickets/create-new-ticket")}
            >
              +ایجاد بلیط جدید
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
                    قیمت بلیط
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
                    price="2500"
                    capacity="20"
                    event="شسیشسی"
                    onClick={clickCheck}
                  />
                  <TicketDetail
                    title="asnaljd"
                    price="2500"
                    capacity="20"
                    event="شسیشسی"
                    onClick={clickCheck}
                  />
                  <TicketDetail
                    title="asnaljd"
                    price="2500"
                    capacity="20"
                    event="شسیشسی"
                    onClick={clickCheck}
                  />
                  <TicketDetail
                    title="asnaljd"
                    price="2500"
                    capacity="20"
                    event="شسیشسی"
                    onClick={clickCheck}
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="ticket-header width d-flex flex-row align-items-center mb-5">
            <h5 className="mb-0">جزئیات فروش {isClickedRow.title}</h5>
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
                      خریده شده توسط
                    </th>
                    <th className="border-0 w-25 text-center" scope="col">
                      قیمت بلیط
                    </th>
                    <th className="border-0 w-25 text-center" scope="col">
                      تخفیف
                    </th>
                    <th className="border-0 w-25 text-center" scope="col">
                      مبلغ پرداختی
                    </th>
                    <th className="border-0 w-25 text-center" scope="col">
                      تاریخ خرید
                    </th>
                  </tr>
                </thead>
                <tbody className="tbody-ticket">
                  <tr className="td-holder-ticket">
                    <TicketDetail
                      informationTicket
                      personName="علی"
                      price="2500"
                      discount="20"
                      paid="20"
                      boughtDate="22:30 - 1400/02/01 "
                    />
                  </tr>
                </tbody>
              </table>
            </div>
            <CreateNewTicketLogo className="d-md-block d-none me-4" />
          </div>
        </>
      )}
    </div>
  );
};

export default Tickets;
