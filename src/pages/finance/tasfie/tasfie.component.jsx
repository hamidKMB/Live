import React from "react"

import "./tasfie.styles.scss"

import TransactionDetail from "../../../components/transaction-detail/transaction-detail.component";

const Tasfie = () => {
    return (
      <div className="tasfie">
        <table className="table">
          <div className="tasfie-details-head d-flex flex-row align-items-center justify-content-start w-100 mb-5">
            <thead className="card d-flex flex-row align-items-center justify-content-evenly ms-4 w-75 pt-2 pe-1 pb-2">
              <tr className="border-1 rounded-3 bg-white d-flex flex-row align-items-center justify-content-evenly pt-2 pe-1 pb-2 mb-2">
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
            </thead>
            <div className="button">خروجی از لیست</div>
          </div>
          <div className="ss d-flex flex-row flex-md-column">
            <tbody>
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
          </div>
        </table>
      </div>
    );
}

export default Tasfie;