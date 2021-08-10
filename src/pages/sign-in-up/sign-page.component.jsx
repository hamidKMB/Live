import React from "react";
import TextInput from "../../components/text-input/text-input.component";
import OtpInput from "react-otp-input";
import "./sign-page.styles.scss";
import {useHistory} from "react-router";
import Cookies from "js-cookie";
import ApiRequest from "../../ApiRequest";


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
        console.log(mobile);
        ApiRequest("/auth/request_sms_code_for_login", "POST", {mobile: mobile})
            .then((res) => {
                if (res.status === "SUCCESS")
                    setIsPhoneNumberEntered("phone number Entered");
            })
            .catch((err) => console.log(err));
    };
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
            }
        });
    };

    const onChangeHandlerINput = (value) => {
        setMobile(value);
    };

    return (
        <div className="sign d-flex justify-content-center align-items-center">
            {isPhoneNumberEntered === "phone not Entered" ? (
                <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                    <TextInput
                        label="تلفن همراه"
                        id="phone-number"
                        onChange={(e) => onChangeHandlerINput(e.target.value)}
                        input
                    />
                    <input
                        type="submit"
                        className="button me-auto ms-auto  mt-4"
                        placeholder="تایید و ادامه"
                        onClick={sendPhoneToApi}
                    />
                </div>
            ) : (
                <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                    <OtpInput
                        id="otp-input"
                        value={otp}
                        onChange={handleChange}
                        numInputs={4}
                        inputStyle="OTP-input"
                        containerStyle="container-input"
                        focusStyle="focus-input"
                    />
                    <input
                        type="submit"
                        className="button me-auto ms-auto  mt-4"
                        placeholder="تایید و ادامه"
                        onClick={onClickCheck}
                    />
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


