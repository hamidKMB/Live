import React from "react"

import { TextField } from "@material-ui/core"

import "./change-password.styles.scss"
import "../../../../root-styles/buttons.scss"

const ChangePassword = () => {
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
                    <a>
                        بازیابی رمز عبور
                    </a>
                    </span>
                </p>
                <div className="button change-password-button">
                    تغییر رمز
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;
