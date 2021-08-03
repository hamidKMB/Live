import React from "react"

import { TextField } from "@material-ui/core"

// import Modal from "../../../../components/modal/modal.component"

import "./change-password.styles.scss"
import "../../../../root-styles/buttons.scss"

import Modal from "../../../../components/modal/modal.component"

const ChangePassword = () => {
    const [isModalShow, setIsModalShow] = React.useState(false);
    const openModal = () => {
    setIsModalShow(true);
  };

  const closeModal = () => {
    setIsModalShow(false);
  };
    return (
        <div className="change-password">
            <h3 className="settings-detail">
                تغییر رمز عبور
            </h3>
            <div className="field-holder">
                <TextField
                    id="outlined-basic"
                    label="رمز عبور فعلی"
                    variant="outlined"
                    className="text-field"
                />
                <TextField
                    id="outlined-basic"
                    label="رمز عبور جدید"
                    variant="outlined"
                    className="text-field"
                />
                <TextField
                    id="outlined-basic"
                    label="تکرار رمز عبور جدید"
                    variant="outlined"
                    className="text-field"
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
    )
}

export default ChangePassword;
