import React from "react"

import { ReactComponent as ChangePasswordLogo } from "./change-password-logo.svg";

// import Modal from "../../../../components/modal/modal.component"

import "./change-password.styles.scss"
import "../../../../root-styles/buttons.scss"

import Modal from "../../../../components/modal/modal.component"
import TextInput from "../../../../components/text-input/text-input.component"

const ChangePassword = () => {
    const [isModalShow, setIsModalShow] = React.useState(false);
    const openModal = () => {
    setIsModalShow(true);
  };

  const closeModal = () => {
    setIsModalShow(false);
  };
    return (
        <div className="change-password d-flex flex-row">
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
                    <a href="/">
                        بازیابی رمز عبور
                    </a>
                    </span>
                </p>
                <div className="button change-password-button" onClick={openModal}>
                    تغییر رمز
                </div>
                </div>
                <Modal closeModal={closeModal} isShow={isModalShow}>
                    
                </Modal>
            </div>
            <ChangePasswordLogo className="change-password-logo"/>
        </div>
    )
}

export default ChangePassword;
