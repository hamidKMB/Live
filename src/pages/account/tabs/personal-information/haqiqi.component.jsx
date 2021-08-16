import React from "react"

import TextInput from "../../../../components/text-input/text-input.component";
import DropDown from "../../../../components/drop-down/drop-down.component";
const Haqiqi = () => {
    return (
      <div className="content">
        <TextInput
        label="استان"
        dropDown 
          dropItems = {
            [
              'تهران' ,
              'کرج' ,
              'شیراز' ,
            ]
          }
        />
        <TextInput
        label="شهر"
        dropDown 
          dropItems = {
            [
              'تهران' ,
              'کرج' ,
              'شیراز' ,
            ]
          }
        />
        <TextInput
        label="کد ملی"
        input
        />
        <TextInput
        label="کد پستی"
        input
        />
        <TextInput
        label="تلفن"
        input
        />
        <TextInput
        label="آدرس"
        input
        />
      </div>
    );
}

export default Haqiqi