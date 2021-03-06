import React from "react";

import "./tasfie.styles.scss";

import TransactionDetail from "../../../components/transaction-detail/transaction-detail.component";
import Modal from "../../../components/modal/modal.component";
import BubbleSpinner from "../../../components/loading-spinner/loading-spinner.component";
import InformationTasfie from "./information-tasfie/information-tasfie.component";
import {ReactComponent as TasfieLogo} from "./tasfie-logo.svg";
import {ReactComponent as ModalDesign1} from "../wallet/Modal-design1.svg";
import {ReactComponent as ModalDesign2} from "../wallet/Modal-design2.svg";

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

    const [informationClicked, setInformationClicked] = React.useState({
      isClicked: false ,
      shenase: "",
      dateOfSubmitRequest: "",
      tasfieTillDate: "",
      tasfieItems: "",
      variziMablaq: "",
      situation: ""
    })

    const clickEvent = (event) => {
      const selectedRow =
      event.target.parentElement.parentElement.parentElement.parentElement
      .children
      selectedRow.length === 7 &&
        setInformationClicked({
          ...informationClicked,
          isClicked: true,
          shenase: selectedRow[0].innerText,
          dateOfSubmitRequest: selectedRow[1].innerText,
          tasfieTillDate: selectedRow[2].innerText,
          tasfieItems: selectedRow[3].innerText,
          variziMablaq: selectedRow[4].innerText,
          situation: selectedRow[5].innerText
        });
    }
    return (
      <div className="tasfie">
        {!informationClicked.isClicked ? (
          <div className="overflow-auto">
            <table className="table">
              <thead className="d-flex flex-row align-items-baseline justify-content-md-evenly ms-4 w-100 py-2">
                <tr className="th-holder shadow p-1 mb-3 bg-white d-flex flex-row align-items-center">
                  <th className="border-0" scope="col">
                    ??????????
                  </th>
                  <th className="border-0" scope="col">
                    ?????????? ?????? ??????????????
                  </th>
                  <th className="border-0" scope="col">
                    ?????????? ???? ??????????
                  </th>
                  <th className="border-0" scope="col">
                    ???????? ?????? ??????????
                  </th>
                  <th className="border-0" scope="col">
                    ???????? ????????????
                  </th>
                  <th className="border-0" scope="col">
                    ?????????? ??????????????
                  </th>
                  <th className="border-0" scope="col"></th>
                </tr>
                <th
                  className="button mx-md-auto rounded-2 px-lg-3 px-md-1"
                  onClick={openModal}
                >
                  ?????? ?????????????? ??????????
                </th>
              </thead>
              <tbody className="ss d-flex flex-column">
              <div className="tr-holder-s d-flex flex-column h-100">
              <TransactionDetail
                  shenase="256521"
                  requestDate="1400/02/25-12:30"
                  tasfieTill="1400/02/25-12:30"
                  tasfieItems="1"
                  price="25985065 ??????????"
                  situation="???? ?????? ??????????" //taken from API
                  onClick={clickEvent}
                  tasfie
                />
                <TransactionDetail
                  shenase="256521"
                  requestDate="1400/02/25-12:30"
                  tasfieTill="1400/02/25-12:30"
                  tasfieItems="1"
                  price="25985065 ??????????"
                  situation="?????????? ??????" //taken from API
                  onClick={clickEvent}
                  tasfie
                />
                <TransactionDetail
                  shenase="256521"
                  requestDate="1400/02/25-12:30"
                  tasfieTill="1400/02/25-12:30"
                  tasfieItems="1"
                  price="25985065 ??????????"
                  situation="???? ??????" //taken from API
                  onClick={clickEvent}
                  tasfie
                />
                </div>
              </tbody>
            </table>
          </div>
        ) : (
          //informationTasfie Page
          <InformationTasfie
            return={() => setInformationClicked(false)}
            shenase={informationClicked.shenase}
            dateOfSubmitRequest={informationClicked.dateOfSubmitRequest}
            tasfieTillDate={informationClicked.tasfieTillDate}
            tasfieItems={informationClicked.tasfieItems}
            variziMablaq={informationClicked.variziMablaq}
            situation={informationClicked.situation}
          />
        )}
        {submitRequest && (
          <Modal isShow={submitRequest} closeModal={closeModal}>
            <div className="tasfie-modal d-flex py-5 align-items-center justify-content-center">
              <div className="d-md-flex flex-column justify-content-between d-none">
                  <ModalDesign1 className="design-1 mb-5"/>
                  <ModalDesign2 className="design-2"/>
              </div>
              <div className="card text-center justify-content-center">
                {!checkingRequest.calculating ? (
                  <>
                    <h6>?????????? ?????????? ?????????????? ???? ???? ?????????? date</h6>
                    <span>???????? ?????? ???????? ?????? ????????</span>
                    <BubbleSpinner color="#EFA00B" />
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
                    <h6>???? ?????????? 1400/01/01 ???????? </h6>
                    <h6>stock ??????????</h6>
                    <h6>???????? ????????.</h6>
                    <div
                      className="button mx-auto mt-4 py-2 px-4 rounded-2"
                      onClick={() =>
                        setCheckingRequest({
                          ...checkingRequest,
                          finalSubmitRequest: true,
                        })
                      }
                    >
                      ?????? ??????????
                    </div>
                  </>
                ) : (
                  checkingRequest.calculating &&
                  checkingRequest.result &&
                  checkingRequest.finalSubmitRequest && (
                    <>
                      <h6 >?????????????? ?????? ???? ???????????? ?????? ????</h6>
                      <h6>???????? ?????????? ?????????? ????????????</h6>
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
                        ???????????? ???? ????????{" "}
                      </div>
                    </>
                  )
                )}
              </div>
              <TasfieLogo className="d-md-block d-none mx-auto mx-lg-0  w-50"/>
            </div>
          </Modal>
        )}
      </div>
    );
}

export default Tasfie