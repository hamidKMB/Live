//REACT
import React from "react";

//MaterialUI
import  TextInput  from "../../../../components/text-input/text-input.component";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

//Components
import Hoquqi from "./hoquqi.component";
import Haqiqi from "./haqiqi.component";


//STYLES
import "./personal-information.styles.scss";
import "../../../../root-styles/buttons.scss"

const PersonalInformation = () => {
    const [state, setState] = React.useState(false)
    //false = حقیقی
    //true = حقوقی
    const handleChange = () => {
        setState(prevValue => !prevValue)
    }

  return (
    <div className="personal-information d-flex flex-column flex-md-row">
      <div className="right">
        <h1> اطلاعات پایه </h1>
        <div className="content">
          <TextInput
          label="نام و نام خانوادگی"
          className="text-field"
        />
        <TextInput
          label="پست الکترونیک"
          
        />
        <TextInput
          label="شماره همراه"
          
        />
        </div>
      </div>
      <div className="left">
        <div className="detail-left">
          <h1> اطلاعات تکمیلی </h1>
          <BootstrapSwitchButton
            onlabel="حقیقی"
            onstyle="danger"
            offlabel="حقوقی"
            offstyle="success"
            onChange={handleChange}
          />
        </div>
        {state ? <Haqiqi /> : <Hoquqi />}
        <div className="button">
          ثبت اطلاعات
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
