//REACT
import React from "react";

//MaterialUI
import { TextField } from "@material-ui/core";
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
    <div className="personal-information">
      <div className="right">
        <h1> اطلاعات پایه </h1>
        <div className="content">
          <TextField
          id="outlined-basic"
          label="نام و نام خانوادگی"
          variant="outlined"
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="پست الکترونیک"
          variant="outlined"a
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="شماره همراه"
          variant="outlined"
          className="text-field"
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
