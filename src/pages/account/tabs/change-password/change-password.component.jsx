import React from "react"

import { ReactComponent as ChangePasswordLogo } from "./change-password-logo.svg";
import { ReactComponent as ModalChangePasswordLogo } from "./modal-change-password-logo.svg";
import { ReactComponent as CircleAndDotsLogo } from "./circle-and-dots.svg";
import { ReactComponent as DesignLogo } from "./design.svg";
// import Modal from "../../../../components/modal/modal.component"

import "./change-password.styles.scss"
import "../../../../root-styles/buttons.scss"

import Modal from "../../../../components/modal/modal.component"
import TextInput from "../../../../components/text-input/text-input.component"
import Otp from "./OTP-input/OTP.component";
const ChangePassword = () => {
    const [isModalShow, setIsModalShow] = React.useState(false);
    const [acceptMobileNumber, setAcceptMobileNumber] = React.useState(false);
    const [resendOtpTime , setResendOtpTime] = React.useState(59);

    const openModal = () => {
    setIsModalShow(true);
  };

  const closeModal = () => {
    setIsModalShow(false);
    setAcceptMobileNumber(false)
  };

  const openNewModal = () => {
      setAcceptMobileNumber(true)
      const interval = setInterval(() => {
          setResendOtpTime(prevResendOtpTime => prevResendOtpTime > 0 ? prevResendOtpTime - 1 : clearInterval(interval))
        }, 1000);
  }
    return (
        <div className="change-password d-flex align-items-md-start align-items-center flex-md-row flex-column">
        <div className="change-password-form">
            <h3 className="settings-detail">
                تغییر رمز عبور
            </h3>
            <div className="field-holder">
                <TextInput
                label="رمز عبور فعلی"
                />
                <TextInput
                label="رمز عبور جدید"
                />
                <TextInput
                label="تکرار رمز عبور جدید"
                />
                <ul>
                    <li>حداقل 8 کاراکتر</li>
                    <li>ترکیبی از اعداد ، حروف کوچک و بزرگ و علائم</li>
                </ul>
                <p>
                    رمز عبور خور را فراموش کرده اید؟ <span>
                    <a onClick={openModal}>
                        بازیابی رمز عبور
                    </a>
                    </span>
                </p>
                <div className="button change-password-button" >
                    تغییر رمز
                </div>
                </div>
                {
                    isModalShow &&
                    <Modal closeModal={closeModal} isShow={isModalShow}>
                        {
                            acceptMobileNumber ?
                            <div className="change-password-modal d-flex align-items-center position-relative w-100 h-100">
                                <CircleAndDotsLogo className="position-absolute top-0 end-0 mt-5"/>
                                <DesignLogo className="position-absolute bottom-0 end-0 me-5 mb-5"/>
                                <div className="card card-enter-mobile h-75 mt-auto mb-auto">
                                    <h6>
                                        بازیابی رمز عبور
                                    </h6>
                                    <p>
                                        رمز یکبار مصرف به شماره  3333 333 0933 به صورت <br/> پیامک ارسال گردید. <span onClick={() => setAcceptMobileNumber(false)}>ویرایش شماره</span>
                                    </p>
                                    <Otp/>
                                    <span className="progress-bar-otp">
                                        <span className="progress-bar-otp-orange" style={{width:`${ 100 - ((resendOtpTime / 59) * 100)}%`}}/>
                                    </span>
                                    <p>تا00 :{resendOtpTime} ثانیه دیگر امکان ارسال مجدد رمز یکبار مصرف<br/> به شماره شما امکان پذیر خواهد بود</p>
                                    <div className="d-flex align-items-center  justify-content-between">
                                        <div className="button ps-4 pe-4 ">
                                            تایید و ادامه
                                        </div>
                                        <div className="button ps-4 pe-4 resend ">
                                            ارسال مجدد
                                        </div>
                                    </div>
                                </div>
                                <ModalChangePasswordLogo className="me-auto ms-auto"/>
                            </div>
                            :
                            <div className="change-password-modal d-flex align-items-center position-relative w-100 h-100">
                                <CircleAndDotsLogo className="position-absolute top-0 end-0 mt-5"/>
                                <DesignLogo className="position-absolute bottom-0 end-0 me-5 mb-5"/>
                                <div className="card card-enter-mobile h-75 mt-auto mb-auto">
                                    <h6>
                                        بازیابی رمز عبور
                                    </h6>
                                    <p>
                                        لطفا شماره موبایل خود را وارد کنید
                                    </p>
                                    <TextInput id="mobile-number" label="شماره موبایل"/>
                                    <div className="button me-5 ms-5" onClick={openNewModal}>
                                        تایید و ادامه
                                    </div>
                                </div>
                                <ModalChangePasswordLogo className="me-auto ms-auto"/>
                            </div>
                        }
                    </Modal>

                }
            </div>
            <ChangePasswordLogo className="change-password-logo"/>
        </div>
    )
}

export default ChangePassword;
