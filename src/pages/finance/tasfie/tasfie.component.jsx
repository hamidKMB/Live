import React from "react";

import "./tasfie.styles.scss";

import TransactionDetail from "../../../components/transaction-detail/transaction-detail.component";

const Tasfie = () => {
    return (
      <div className="tasfie">
        <table className="table">
          <thead className="d-flex flex-row align-items-baseline justify-content-evenly ms-4 w-100 py-2">
            <tr className="th-holder shadow p-1 mb-3 bg-white d-flex flex-row align-items-center">
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
              <th className="border-0" scope="col"></th>
            </tr>
            <th className="button mx-auto rounded-2">ثبت درخواست تسویه</th>
          </thead>
          <tbody className="ss d-flex flex-column">
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
        </table>
      </div>
    );
}

export default Tasfie