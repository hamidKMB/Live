import React from "react";

import TextInput from "../../../../components/text-input/text-input.component";

import "./settings-of-channel.styles.scss"
import "../../../../root-styles/buttons.scss"

const SettingsOfChannel = () => {
    return (
      <div className="settings">
        <h3 className="setting-detail">تصویر پروفایل</h3>
        <div className="circle-holder">
          <div className="circle">
            <img src="#" alt="upload-logo" />
            <span>
              برای انتخاب تصویر پروفایل <br /> کلیک کنید
            </span>
          </div>
        </div>
        <h3 className="setting-detail">کاور کانال</h3>
        <div className="rect">
          <img src="#" alt="upload-logo" />
          <span>برای انتخاب کاور کانال کلیک کنید</span>
        </div>
        <h3 className="setting-detail">معرفی کانال</h3>
        <TextInput
        label="نام کانال"
        />
        <TextInput
        label="آدرس کانال"
        />
        <TextInput
        label="خود را معرفی کنید"
        />
        <div className="button settings-button">
            ثبت تغییرات
        </div>
      </div>
    );
}

export default SettingsOfChannel