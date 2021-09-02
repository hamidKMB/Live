import React from "react";

import TextInput from "../../../../components/text-input/text-input.component";
import {ReactComponent as UploadLogo} from "./upload.svg";
import {ReactComponent as SettingsChannelLogo} from "./settings-channel-logo.svg";
import "./settings-of-channel.styles.scss"
import "../../../../root-styles/buttons.scss"

const SettingsOfChannel = () => {
    return (
      <div className="settings d-flex flex-row align-items-center align-items-md-start justify-content-md-start justify-content-center">
        <div className="settings-form">
          <h3 className="setting-detail">تصویر پروفایل</h3>
          <div className="circle-holder">
            <div className="circle">
              <UploadLogo />
              <span>
                برای انتخاب تصویر پروفایل <br /> کلیک کنید
              </span>
            </div>
          </div>
          <h3 className="setting-detail">کاور کانال</h3>
          <div className="rect">
            <UploadLogo />
            <span>برای انتخاب کاور کانال کلیک کنید</span>
          </div>
          <h3 className="setting-detail">معرفی کانال</h3>
          <TextInput label="نام کانال" input/>
          <TextInput label="آدرس کانال" input/>
          <TextInput label="خود را معرفی کنید" textArea/>
          <div className="button settings-button">ثبت تغییرات</div>
        </div>
        <SettingsChannelLogo className="settings-channel-logo me-5 d-none d-md-block" />
      </div>
    );
}

export default SettingsOfChannel