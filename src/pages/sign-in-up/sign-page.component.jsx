import React from "react";
import TextInput from "../../components/text-input/text-input.component";
import Otp from "../account/tabs/change-password/OTP-input/OTP.component";

import "./sign-page.styles.scss";

const Sign = (props) => {
    const [isPhoneNumberEntered, setIsPhoneNumberEntered] = React.useState("phone not Entered");
    const [isUserEnteredBefore, setIsUserEnteredBefore] = React.useState(false);
    const onClickCheck = () => {
        if (isUserEnteredBefore) {
            return (
                props.signHandler()
            )
        } else {
            setIsPhoneNumberEntered("phone not in list")
        }
    }
    return (
        <div className="sign d-flex justify-content-center align-items-center">
            {   
                 isPhoneNumberEntered === "phone not Entered"?

                    <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                        <TextInput label="تلفن همراه" />
                        <input 
                            type="submit" 
                            className="button me-auto ms-auto  mt-4" 
                            placeholder="تایید و ادامه" 
                            onClick={() => setIsPhoneNumberEntered("phone number Entered")}
                        />
                    </div>

                :
                isPhoneNumberEntered === "phone number Entered" ?

                    <div className="sign-form card d-flex justify-content-center mt-5 mb-5 p-5">
                        <Otp />
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
                            <TextInput label="نام و نام خانوادگی" />
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


