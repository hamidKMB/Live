import React from "react";
import TextInput from "../../components/text-input/text-input.component";


import ApiRequest from "../../ApiRequest.js";
import OtpInput from "react-otp-input";
import "./sign-page.styles.scss";

const Sign = (props) => {
    const [isPhoneNumberEntered, setIsPhoneNumberEntered] = React.useState("phone not Entered");
    const [isUserEnteredBefore, setIsUserEnteredBefore] = React.useState(false);
    const [otp, setOtp] = React.useState("")
    const [mobile, setMobile] = React.useState("");
    
    const handleChange = (otp) => {
        setOtp(otp)
    };
    //////////////////////////////////
    const sendPhoneToApi = () => {
        setMobile("09121000110");
        console.log(mobile);
        ApiRequest(
            "/auth/request_sms_code_for_login" ,
            "POST",
            {mobile: mobile}
        )
        .then( (res) => {
            console.log(res);
            console.log(res.data.is_guest);
            if (res.status === "SUCCESS" )
                setIsPhoneNumberEntered("phone number Entered")
                setIsUserEnteredBefore(res.data.is_guest)
            })
            .catch(
                err => console.log(err)
                )
                
            }
            //////////////////////////////////
    const onClickCheck = () => {
        console.log(mobile, otp);
        console.log(isUserEnteredBefore);
        ApiRequest(
            "/auth/login_with_mobile",
            "POST",
            {
                mobile: mobile , 
                sms_code: parseInt(otp)
            }
            ).then(
                (response) => { 
                    console.log(response);
                    if (response.status === "SUCCESS" ){
                        localStorage.setItem("token",response.token)
                        !isUserEnteredBefore ? props.signHandler() : setIsPhoneNumberEntered("phone not in list")
                    } else {
                        setOtp("")
                    } 
                }
            )
    }
    return (
        <div className="sign d-flex justify-content-center align-items-center">
            {   
                 isPhoneNumberEntered === "phone not Entered"?

                    <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                        <TextInput label="تلفن همراه" id="phone-number" input/>
                        <input 
                            type="submit" 
                            className="button me-auto ms-auto  mt-4" 
                            placeholder="تایید و ادامه" 
                            onClick={sendPhoneToApi}
                        />
                    </div>

                :
                isPhoneNumberEntered === "phone number Entered" ?

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

                : 
                isPhoneNumberEntered === "phone not in list" &&

                    <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                            <TextInput label="نام و نام خانوادگی" input/>
                            <input 
                                type="submit" 
                                className="button me-auto ms-auto  mt-4" 
                                placeholder="تایید و ادامه" 
                                onClick={props.signHandler}
                            />
                    </div>  
            }
        </div>
        )
    }
    
    export default Sign;
    
    
    // <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
    //     <TextInput label="نام و نام خانوادگی" />
    //     <input type="submit" className="button me-auto ms-auto  mt-4" placeholder="تایید و ادامه" onClick={props.signHandler}/>
    // </div>


