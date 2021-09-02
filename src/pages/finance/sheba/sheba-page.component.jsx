import React from "react"
import Modal from "../../../components/modal/modal.component"
import TextInput from "../../../components/text-input/text-input.component"
import ShebaDetail from "./sheba-detail/sheba-detail.component"
import InfoIcon from "@material-ui/icons/Info";
import "./sheba-page.styles.scss"
import {ReactComponent as ShebaLogo} from "./sheba-logo.svg";
import {ReactComponent as ModalDesign1} from "../wallet/Modal-design1.svg";
import {ReactComponent as ModalDesign2} from "../wallet/Modal-design2.svg";

const Sheba = () => {
    const [addNewSheba, setAddNewSheba] = React.useState(false)
    const [enterSheba, setEnterSheba] = React.useState(false)
    return (
      <div className="sheba">
        <div className="header-sheba d-flex flex-row align-items-center px-3 mb-5">
          <h4>شبا های تسویه حساب</h4>
          <div
            className="button me-auto fw-light rounded-3"
            onClick={() => setAddNewSheba(true)}
          >
            + افزودن شبای جدید
          </div>
        </div>
        <div className="overflow-auto">
          <table className="table text-center">
            <thead>
              <tr className="th-holder-sheba shadow py-1 px-3 mb-3 bg-white d-flex flex-row mx-3">
                <th scope="col" className="border-0 w-25">
                  کد
                </th>
                <th scope="col" className="border-0">
                  شبا
                </th>
                <th scope="col" className="border-0">
                  وضعیت
                </th>
                <th scope="col" className="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <ShebaDetail
                code="125"
                sheba="IR500120020000008648038631"
                confirmed
                default
              />
              <ShebaDetail
                code="125"
                sheba="IR500120020000008648038631"
              />
            </tbody>
          </table>
        </div>
        <div className="warnings mx-3">
            <p className="notes">
                <InfoIcon style={{color:"orange"}} className="ms-2"/>
                کاربر گرامی پیش از ثبت شماره شبا لطفا به نکات زیر توجه فرمایید:
            </p>
            <ul className="list-designed">
                <li className="lh-lg">
                    پس از ثبت درخواست ابتدا شناسه اعلامی اعتبارسنجی و استعلام میگردد و سپس برای ثبت به شبکه شاپرک ارسال خواهد شد و تا زمان تایید نهایی توسط شاپرک امکان ثبت درخواست تسویه حساب جدید توسط شما امکان پذیر نمی باشد .
                </li>
                <li className="lh-lg">
                    شما تنها 3 شماره شبا میتوانید ثبت کنید.
                </li>
                <li className="lh-lg">
                    بعد از ثبت شماره شبا در صورت معتبر بودن و تایید قادر به ویرایش و یا حذف آن نیستید.
                </li>
            </ul>
        </div>
        {addNewSheba && (
          <Modal
            isShow={addNewSheba}
            closeModal={() => {
              setAddNewSheba(false);
              setEnterSheba(false);
            }}
          >
            <div className="sheba-modal d-flex py-5 align-items-center justify-content-center">
              <div className="d-md-flex flex-column justify-content-between d-none">
                  <ModalDesign1 className="design-1 mb-5"/>
                  <ModalDesign2 className="design-2"/>
              </div>
                <div className="card justify-content-center my-auto ms-md-auto mx-lg-auto position-relative">
                  {!enterSheba ? (
                    <>
                      <h6 className="mb-4 ms-auto fw-bold fs-6">
                        لطفا شماره شبا را وارد کنید:
                      </h6>
                      <TextInput label="شماره شبا" input />
                      <div
                        className="button mx-auto mt-5 fw-light rounded-3 py-2 px-3"
                        onClick={() => setEnterSheba(true)}
                      >
                        ثبت درخواست
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <p>شماره شبا شما ثبت شد</p>
                      <p>پس از تایید در لیست شما قرار میگیرد.</p>
                      <div
                        className="button px-1 py-2 rounded-3 fw-light mx-4"
                        onClick={() => {
                          setAddNewSheba(false);
                          setEnterSheba(false);
                        }}
                      >
                        بازگشت به سایت
                      </div>
                    </div>
                  )}
                </div>
              
              <ShebaLogo className="d-md-block d-none mx-auto mx-lg-0 w-50"/>
            </div>
          </Modal>
        )}
      </div>
    );
}

export default Sheba