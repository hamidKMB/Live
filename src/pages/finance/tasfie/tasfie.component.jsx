import React from "react";

import "./tasfie.styles.scss";

import TransactionDetail from "../../../components/transaction-detail/transaction-detail.component";
import Modal from "../../../components/modal/modal.component";


const Tasfie = () => {
    const [submitRequest, setSubmitRequest] = React.useState(false)
    const [checkingRequest, setCheckingRequest] = React.useState({
      calculating: false,
      result: false,
      finalSubmitRequest: false
    })
    const openModal = () => setSubmitRequest(true);
    const closeModal = () => {
      setSubmitRequest(false)
    };
    console.log(checkingRequest);
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
            <th className="button mx-auto rounded-2" onClick={openModal}>
              ثبت درخواست تسویه
            </th>
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
        {submitRequest && (
          <Modal isShow={submitRequest} closeModal={closeModal}>
            <div className="tasfie-modal d-flex flex-row py-4 px-5">
              <div className="card text-center justify-content-center">
                {!checkingRequest.calculating ? (
                  <>
                    <h6>درحال بررسی پرداختی ها تا تاریخ date</h6>
                    <span>لطفا چند لحظه صبر کنید</span>
                    <span style={{ display: "none" }}>
                      {setTimeout(
                        () =>
                          setCheckingRequest({
                            ...checkingRequest,
                            result: true,
                            calculating: true,
                          }),
                        5000
                      )}
                    </span>
                    {/* //apiCall */}
                  </>
                ) : checkingRequest.calculating &&
                  checkingRequest.result &&
                  !checkingRequest.finalSubmitRequest ? (
                  <>
                    <h6 className="mx-5">تا تاریخ 1400/01/01 مبلغ </h6>
                    <h6>stock تومان</h6>
                    <h6>وجود دارد.</h6>
                    <div
                      className="button mx-auto mt-4 py-2 px-3 rounded-2"
                      onClick={() =>
                        setCheckingRequest({
                          ...checkingRequest,
                          finalSubmitRequest: true,
                        })
                      }
                    >
                      ثبت تسویه
                    </div>
                  </>
                ) : (
                  checkingRequest.calculating &&
                  checkingRequest.result &&
                  checkingRequest.finalSubmitRequest && (
                    <>
                      <h6 className="mx-3">درخواست شما با موفقیت ثبت شد</h6>
                      <h6>لطفا منتظر تایید بمانید</h6>
                      <div
                        className="button mx-auto mt-4 py-2 px-3 rounded-2"
                        onClick={() => {
                          setCheckingRequest({
                            result: false,
                            calculating: false,
                            finalSubmitRequest: false,
                          });
                          setSubmitRequest(false);
                        }}
                      >
                        {" "}
                        بازگشت به سایت{" "}
                      </div>
                    </>
                  )
                )}
              </div>
              <div className="logo"></div>
            </div>
          </Modal>
        )}
      </div>
    );
}

export default Tasfie