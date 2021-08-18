import React from "react"

import "./payment.styles.scss"

import TransactionDetail from "../../../components/transaction-detail/transaction-detail.component";

const Payments = () => {
    return (
      <div className="payment">
        <table className="table">
          <thead className="d-flex flex-row align-items-baseline justify-content-evenly ms-4 w-100 py-2">
            <tr className="th-holder shadow p-1 mb-3 bg-white d-flex flex-row align-items-center">
              <th className="border-0" scope="col">
                شناسه پرداخت
              </th>
              <th className="border-0" scope="col">
                توضیحات پرداخت
              </th>
              <th className="border-0" scope="col">
                مبلغ (تومان)
              </th>
              <th className="border-0" scope="col">
                تاریخ پرداخت
              </th>
            </tr>
            <th className="button mx-auto rounded-2">
              خروجی از لیست
            </th>
          </thead>
          <tbody className="ss d-flex flex-column">
            <TransactionDetail
              shenasePardakht="25652145"
              description="برداشت از کیف پول"
              price="-2222222"
              date="1400/02/25-12:30"
              bardasht
            />
            <TransactionDetail
              shenasePardakht="25652145"
              description="برداشت از کیف پول"
              price="+2222222"
              date="1400/02/25-12:30"
            />
            <TransactionDetail
              shenasePardakht="25652145"
              description="برداشت از کیف پول"
              price="-2222222"
              date="1400/02/25-12:30"
              bardasht
            />
            <TransactionDetail
              shenasePardakht="25652145"
              description="برداشت از کیف پول"
              price="+2222222"
              date="1400/02/25-12:30"
            />
          </tbody>
        </table>
      </div>
    );
}

export default Payments;