import React from "react";
import TextInput from "../../components/text-input/text-input.component";
import ApiRequest from "../../ApiRequest.js";
import OtpInput from "react-otp-input";
import "./sign-page.styles.scss";
import { useHistory } from "react-router";


const Sign = (props) => {
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] =
    React.useState("phone not Entered");
  const [otp, setOtp] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const history = useHistory();
  const handleChange = (otp) => {
    setOtp(otp);
  };
  //////////////////////////////////
  const sendPhoneToApi = () => {
    console.log(mobile);
    ApiRequest("/auth/request_sms_code_for_login", "POST", { mobile: mobile })
      .then((res) => {
        console.log(res);
        console.log(res.data.is_guest);
        if (res.status === "SUCCESS")
          setIsPhoneNumberEntered("phone number Entered");
      })
      .catch((err) => console.log(err));
  };
  //////////////////////////////////
  const onClickCheck = () => {
    ApiRequest("/auth/login_with_mobile", "POST", {
      mobile: mobile,
      sms_code: parseInt(otp),
    }).then((response) => {
      console.log(response);
      if (response.status === "SUCCESS") {
        localStorage.setItem("token", response.token);
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


