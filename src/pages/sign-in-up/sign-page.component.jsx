import React from "react";
import TextInput from "../../components/text-input/text-input.component";
import OtpInput from "react-otp-input";
import "./sign-page.styles.scss";
import {useHistory} from "react-router";
import Cookies from "js-cookie";
import ApiRequest from "../../ApiRequest";
import {ReactComponent as LoginLogo} from "../account/tabs/change-password/modal-change-password-logo.svg";
import {ReactComponent as OTPLogo} from "../account/tabs/change-password/change-password-logo.svg"

const Sign = (props) => {

    const [isPhoneNumberEntered, setIsPhoneNumberEntered] =React.useState("phone not Entered");
    const [otp, setOtp] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const history = useHistory();

    const handleChange = (otp) => {
        setOtp(otp);
    };

    React.useEffect(() => {
        Cookies.get('token') && history.push("/")
    })

    //////////////////////////////////
    const sendPhoneToApi = () => { //Sending the Phone number to API Request for SMS
        mobile ?
        ApiRequest("/auth/request_sms_code_for_login", "POST", {mobile: mobile})
            .then((res) => {
                if (res.status === "SUCCESS")
                    setIsPhoneNumberEntered("phone number Entered");
            })
            .catch((err) => console.log(err))
            :
            alert("please Enter Your Mobile Number First")
    }
    //////////////////////////////////
    const onClickCheck = () => { // Check user and login if the OTP entered True
        ApiRequest("/auth/login_with_mobile", "POST", {
            mobile: mobile,
            sms_code: parseInt(otp),
        }).then((response) => {
            if (response.status === "SUCCESS") {
                Cookies.set("token", response.token);
                return history.push("/")
            } else {
                setOtp("");
                alert("Enter The OTP Correctly")
            }
        });
    };

    const onChangeHandlerInput = (value) => {
        setMobile(value);
    };

    return (
        <div className="sign d-flex justify-content-center align-items-center">
            {isPhoneNumberEntered === "phone not Entered" ? (
                <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                    <h4 className="mb-5">
                        ورود به سامانه
                    </h4>  
                    <span className="mb-4 fs-6">
                        لطفا شماره تلفن خود را وارد نمایید 
                    </span>
                    <TextInput
                        label="تلفن همراه"
                        id="phone-number"
                        onChange={(e) => onChangeHandlerInput(e.target.value)}
                        input
                    />
                    <label htmlFor="Enter-phone" className="button mx-auto" onClick={sendPhoneToApi}>
                        تایید و ادامه
                        <input
                            type="submit"
                            id="Enter-Phone"
                            className="d-none me-auto ms-auto  mt-4"
                            placeholder="تایید و ادامه"
                        />
                    </label>
                    <LoginLogo className="position-absolute login"/>
                </div>
            ) : (
                <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                    <h4 className="mb-5">
                        ورود به سامانه
                    </h4>
                    <span className="mb-4 fs-6">
                        لطفا کد ارسال شده به تلفن خود را وارد نمایید 
                    </span>
                    <OtpInput
                        id="otp-input"
                        value={otp}
                        onChange={handleChange}
                        numInputs={4}
                        inputStyle="OTP-input"
                        containerStyle="container-input"
                        focusStyle="focus-input"
                        className="mb-3"
                    />
                   <label htmlFor="Enter-phone" className="button mx-auto" onClick={onClickCheck}>
                        تایید و ادامه
                        <input
                            type="submit"
                            id="Enter-Phone"
                            className="d-none me-auto ms-auto  mt-4"
                            placeholder="تایید و ادامه"
                        />
                    </label>
                    <LoginLogo className="login position-absolute" id="second-login"/>
                </div>
            )}
        </div>
    );
};

export default Sign;


// <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
//     <TextInput label="نام و نام خانوادگی" />
//     <input type="submit" className="button me-auto ms-auto  mt-4" placeholder="تایید و ادامه" onClick={props.signHandler}/>
// </div>


