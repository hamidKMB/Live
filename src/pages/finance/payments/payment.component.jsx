import React from "react";

import "./payment.styles.scss";

import TransactionDetail from "../../../components/transaction-detail/transaction-detail.component";

const Payment = () => {
    return (
      <div className="payment">
        <table className="table">
          <div className="tasfie-details-head d-flex flex-row align-items-center justify-content-start w-100 mb-5">
            <thead className="card d-flex flex-row align-items-center justify-content-evenly ms-4 pt-2 pe-1 pb-2">
              <tr>
                <th className="border-0" scope="col">
                    شناسه
                  </th>
                  <th className="border-0" scope="col">
                    تاریخ ثبت درخواست
                  </th>
                  <th className="border-0" scope="col">
                    تسویه تا تاریخ
                  </th>
                  <th className="border-0" scope="col">
                    آیتم های تسویه
                  </th>
                  <th className="border-0" scope="col">
                    مبلغ واریزی
                  </th>
                  <th className="border-0" scope="col">
                    وضعیت درخواست
                  </th>
              </tr>  
            </thead>
            <div className="button">خروجی از لیست</div>
          </div>
          <div className="d-flex flex-row flex-md-column">
            <tbody>
              <TransactionDetail
                shenase="256521"
                requestDate="1400/02/25-12:30"
                tasfieTill="1400/02/25-12:30"
                tasfieItems="1حواله"
                price="25985065 تومان"
                situation="در حال بررسی" //taken from API
                tasfie
              />
              <TransactionDetail
                shenase="256521"
                requestDate="1400/02/25-12:30"
                tasfieTill="1400/02/25-12:30"
                tasfieItems="1حواله"
                price="25985065 تومان"
                situation="واریز شده" //taken from API
                tasfie
              />
              <TransactionDetail
                shenase="256521"
                requestDate="1400/02/25-12:30"
                tasfieTill="1400/02/25-12:30"
                tasfieItems="1حواله"
                price="25985065 تومان"
                situation="رد شده" //taken from API
                tasfie
              />
            </tbody>
          </div>
        </table>
      </div>
    );
}

export default Payment